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

package com.badlogic.invaders

import com.badlogic.gdx.Gdx
import com.badlogic.gdx.graphics.Color
import com.badlogic.gdx.graphics.GL20
import com.badlogic.gdx.graphics.PerspectiveCamera
import com.badlogic.gdx.graphics.Pixmap.Format
import com.badlogic.gdx.graphics.Texture
import com.badlogic.gdx.graphics.Texture.TextureFilter
import com.badlogic.gdx.graphics.g2d.BitmapFont
import com.badlogic.gdx.graphics.g2d.SpriteBatch
import com.badlogic.gdx.graphics.g3d.Environment
import com.badlogic.gdx.graphics.g3d.ModelBatch
import com.badlogic.gdx.graphics.g3d.environment.DirectionalLight
import com.badlogic.gdx.math.Matrix3
import com.badlogic.gdx.math.Matrix4
import com.badlogic.gdx.math.Vector3
import com.badlogic.invaders.simulation.Ship
import com.badlogic.invaders.simulation.Simulation

/** The renderer receives a simulation and renders it.
 * @author mzechner
 */
class Renderer {
    /** sprite batch to draw text  */
    private var spriteBatch: SpriteBatch? = null
    /** the background texture  */
    private var backgroundTexture: Texture? = null
    /** the font  */
    private var font: BitmapFont? = null
    /** the rotation angle of all invaders around y  */
    private var invaderAngle = 0f
    /** status string  */
    private var status = ""
    /** keeping track of the last score so we don't constantly construct a new string  */
    private var lastScore = 0
    private var lastLives = 0
    private var lastWave = 0

    /** view and transform matrix for text rendering and transforming 3D objects  */
    private val viewMatrix = Matrix4()
    private val transform = Matrix4()
    private val normal = Matrix4()
    private val normal3 = Matrix3()

    /** perspective camera  */
    private var camera: PerspectiveCamera? = null

    /** the directional light  */
    internal lateinit var lights: Environment

    internal lateinit var modelBatch: ModelBatch

    internal val tmpV = Vector3()

    internal val dir = Vector3()

    init {
        try {
            lights = Environment()
            lights.add(DirectionalLight().set(Color.WHITE, Vector3(-1f, -0.5f, 0f).nor()))

            spriteBatch = SpriteBatch()
            modelBatch = ModelBatch()

            backgroundTexture = Texture(Gdx.files.internal("data/planet.jpg"), Format.RGB565, true)
            backgroundTexture!!.setFilter(TextureFilter.MipMap, TextureFilter.Linear)

            font = BitmapFont(Gdx.files.internal("data/font10.fnt"), Gdx.files.internal("data/font10.png"), false)

            camera = PerspectiveCamera(67f, Gdx.graphics.width.toFloat(), Gdx.graphics.height.toFloat())
        } catch (ex: Exception) {
            ex.printStackTrace()
        }

    }

    fun render(simulation: Simulation, delta: Float) {
        // We explicitly require GL10, otherwise we could've used the GLCommon
        // interface via Gdx.gl
        val gl = Gdx.gl
        gl.glClear(GL20.GL_COLOR_BUFFER_BIT or GL20.GL_DEPTH_BUFFER_BIT)
        renderBackground()
        gl.glEnable(GL20.GL_DEPTH_TEST)
        gl.glEnable(GL20.GL_CULL_FACE)
        setProjectionAndCamera(simulation.ship)

        modelBatch.begin(camera)
        modelBatch.render(simulation.explosions)
        if (!simulation.ship.isExploding) modelBatch.render(simulation.ship, lights)
        modelBatch.render(simulation.invaders, lights)
        modelBatch.render(simulation.blocks)
        modelBatch.render(simulation.shots)
        modelBatch.end()

        gl.glDisable(GL20.GL_CULL_FACE)
        gl.glDisable(GL20.GL_DEPTH_TEST)

        spriteBatch!!.projectionMatrix = viewMatrix
        spriteBatch!!.begin()
        if (simulation.ship.lives != lastLives || simulation.score != lastScore || simulation.wave != lastWave) {
            status = "lives: " + simulation.ship.lives + " wave: " + simulation.wave + " score: " + simulation.score
            lastLives = simulation.ship.lives
            lastScore = simulation.score
            lastWave = simulation.wave
        }
        spriteBatch!!.enableBlending()
        font!!.draw(spriteBatch, status, 0f, 320f)
        spriteBatch!!.end()

        invaderAngle += delta * 90
        if (invaderAngle > 360) invaderAngle -= 360f
    }

    private fun renderBackground() {
        viewMatrix.setToOrtho2D(0f, 0f, 400f, 320f)
        spriteBatch!!.projectionMatrix = viewMatrix
        spriteBatch!!.begin()
        spriteBatch!!.disableBlending()
        spriteBatch!!.color = Color.WHITE
        spriteBatch!!.draw(backgroundTexture, 0f, 0f, 480f, 320f, 0, 0, 512, 512, false, false)
        spriteBatch!!.end()
    }

    private fun setProjectionAndCamera(ship: Ship) {
        ship.transform.getTranslation(tmpV)
        camera!!.position.set(tmpV.x, 6f, 2f)
        camera!!.direction.set(tmpV.x, 0f, -4f).sub(camera!!.position).nor()
        camera!!.update()
    }

    fun dispose() {
        spriteBatch!!.dispose()
        backgroundTexture!!.dispose()
        font!!.dispose()
    }
}
