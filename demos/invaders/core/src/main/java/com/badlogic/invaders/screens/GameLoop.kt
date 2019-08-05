/*
 * Copyright 2010 Mario Zechner (contact@badlogicgames.com), Nathan Sweet (admin@esotericsoftware.com)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

package com.badlogic.invaders.screens

import com.badlogic.gdx.Gdx
import com.badlogic.gdx.Input.Keys
import com.badlogic.gdx.audio.Sound
import com.badlogic.gdx.controllers.Controller
import com.badlogic.gdx.controllers.ControllerAdapter
import com.badlogic.gdx.controllers.ControllerListener
import com.badlogic.gdx.controllers.mappings.Ouya
import com.badlogic.invaders.Invaders
import com.badlogic.invaders.Renderer
import com.badlogic.invaders.simulation.Simulation
import com.badlogic.invaders.simulation.SimulationListener

class GameLoop(invaders: Invaders) : InvadersScreen(invaders), SimulationListener {
    /** the simulation  */
    private val simulation: Simulation
    /** the renderer  */
    private val renderer: Renderer
    /** explosion sound  */
    private val explosion: Sound
    /** shot sound  */
    private val shot: Sound

    /** controller  */
    private var buttonsPressed = 0
    private val listener = object : ControllerAdapter() {
        override fun buttonDown(controller: Controller?, buttonIndex: Int): Boolean {
            buttonsPressed++
            return true
        }

        override fun buttonUp(controller: Controller?, buttonIndex: Int): Boolean {
            buttonsPressed--
            return true
        }
    }

    override val isDone: Boolean
        get() = simulation.ship.lives == 0

    init {
        simulation = Simulation()
        simulation.listener = this
        renderer = Renderer()
        explosion = Gdx.audio.newSound(Gdx.files.internal("data/explosion.wav"))
        shot = Gdx.audio.newSound(Gdx.files.internal("data/shot.wav"))

        if (invaders.controller != null) {
            invaders.controller!!.addListener(listener)
        }
    }

    override fun dispose() {
        renderer.dispose()
        shot.dispose()
        explosion.dispose()
        if (invaders.controller != null) {
            invaders.controller!!.removeListener(listener)
        }
        simulation.dispose()
    }

    override fun draw(delta: Float) {
        renderer.render(simulation, delta)
    }

    override fun update(delta: Float) {
        simulation.update(delta)

        val accelerometerY = Gdx.input.accelerometerY
        if (accelerometerY < 0)
            simulation.moveShipLeft(delta, Math.abs(accelerometerY) / 10)
        else
            simulation.moveShipRight(delta, Math.abs(accelerometerY) / 10)

        if (invaders.controller != null) {
            if (buttonsPressed > 0) {
                simulation.shot()
            }

            // if the left stick moved, move the ship
            val axisValue = invaders.controller!!.getAxis(Ouya.AXIS_LEFT_X) * 0.5f
            if (Math.abs(axisValue) > 0.25f) {
                if (axisValue > 0) {
                    simulation.moveShipRight(delta, axisValue)
                }
                else {
                    simulation.moveShipLeft(delta, -axisValue)
                }
            }
        }

        if (Gdx.input.isKeyPressed(Keys.DPAD_LEFT) || Gdx.input.isKeyPressed(Keys.A)) simulation.moveShipLeft(delta, 0.5f)
        if (Gdx.input.isKeyPressed(Keys.DPAD_RIGHT) || Gdx.input.isKeyPressed(Keys.D)) simulation.moveShipRight(delta, 0.5f)
        if (Gdx.input.isTouched || Gdx.input.isKeyPressed(Keys.SPACE)) simulation.shot()
    }

    override fun explosion() {
        explosion.play()
    }

    override fun shot() {
        shot.play()
    }
}
