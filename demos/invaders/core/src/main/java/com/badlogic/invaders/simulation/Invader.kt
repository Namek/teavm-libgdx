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

package com.badlogic.invaders.simulation

import com.badlogic.gdx.graphics.g3d.Model
import com.badlogic.gdx.graphics.g3d.ModelInstance
import com.badlogic.gdx.math.Vector3

class Invader(model: Model, x: Float, y: Float, z: Float) : ModelInstance(model, x, y, z) {

    var state = STATE_MOVE_LEFT
    var wasLastStateLeft = true
    var movedDistance = Simulation.PLAYFIELD_MAX_X / 2

    fun update(delta: Float, speedMultiplier: Float) {
        movedDistance += delta * INVADER_VELOCITY * speedMultiplier
        if (state == STATE_MOVE_LEFT) {
            transform.trn(-delta * INVADER_VELOCITY * speedMultiplier, 0f, 0f)
            if (movedDistance > Simulation.PLAYFIELD_MAX_X) {
                state = STATE_MOVE_DOWN
                movedDistance = 0f
                wasLastStateLeft = true
            }
        }
        if (state == STATE_MOVE_RIGHT) {
            transform.trn(delta * INVADER_VELOCITY * speedMultiplier, 0f, 0f)
            if (movedDistance > Simulation.PLAYFIELD_MAX_X) {
                state = STATE_MOVE_DOWN
                movedDistance = 0f
                wasLastStateLeft = false
            }
        }
        if (state == STATE_MOVE_DOWN) {
            transform.trn(0f, 0f, delta * INVADER_VELOCITY * speedMultiplier)
            if (movedDistance > 1) {
                if (wasLastStateLeft)
                    state = STATE_MOVE_RIGHT
                else
                    state = STATE_MOVE_LEFT
                movedDistance = 0f
            }
        }
        transform.rotate(0f, 1f, 0f, INVADER_ROTATION * delta)
    }

    companion object {
        var INVADER_ROTATION = 45f
        var INVADER_RADIUS = 0.75f
        var INVADER_VELOCITY = 1f
        var INVADER_POINTS = 40
        val STATE_MOVE_LEFT = 0
        val STATE_MOVE_DOWN = 1
        val STATE_MOVE_RIGHT = 2
    }
}
