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
import com.badlogic.gdx.controllers.Controller
import com.badlogic.gdx.controllers.ControllerAdapter
import com.badlogic.gdx.graphics.Color
import com.badlogic.gdx.graphics.GL20
import com.badlogic.gdx.graphics.Texture
import com.badlogic.gdx.graphics.Texture.TextureFilter
import com.badlogic.gdx.graphics.g2d.BitmapFont
import com.badlogic.gdx.graphics.g2d.GlyphLayout
import com.badlogic.gdx.graphics.g2d.SpriteBatch
import com.badlogic.gdx.math.Matrix4
import com.badlogic.gdx.utils.Align
import com.badlogic.invaders.Invaders

/** The game over screen displays the final score and a game over text and waits for the user to touch the screen in which case it
 * will signal that it is done to the orchestrating GdxInvaders class.
 *
 * @author mzechner
 */
class GameOver(invaders: Invaders) : InvadersScreen(invaders) {
    /** the SpriteBatch used to draw the background, logo and text  */
    private val spriteBatch: SpriteBatch
    /** the background texture  */
    private val background: Texture
    /** the logo texture  */
    private val logo: Texture
    /** the font  */
    private val font: BitmapFont
    /** is done flag  */
    override var isDone = false
        private set
    /** view & transform matrix  */
    private val viewMatrix = Matrix4()
    private val transformMatrix = Matrix4()

    init {
        spriteBatch = SpriteBatch()
        background = Texture(Gdx.files.internal("data/planet.jpg"))
        background.setFilter(TextureFilter.Linear, TextureFilter.Linear)

        logo = Texture(Gdx.files.internal("data/title.png"))
        logo.setFilter(TextureFilter.Linear, TextureFilter.Linear)

        font = BitmapFont(Gdx.files.internal("data/font16.fnt"), Gdx.files.internal("data/font16.png"), false)

        if (invaders.controller != null) {
            invaders.controller!!.addListener(object : ControllerAdapter() {
                override fun buttonUp(controller: Controller?,
                                      buttonIndex: Int): Boolean {
                    controller!!.removeListener(this)
                    isDone = true
                    return false
                }
            })
        }
    }

    override fun dispose() {
        spriteBatch.dispose()
        background.dispose()
        logo.dispose()
        font.dispose()
    }

    override fun draw(delta: Float) {
        Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT)

        viewMatrix.setToOrtho2D(0f, 0f, 480f, 320f)
        spriteBatch.projectionMatrix = viewMatrix
        spriteBatch.transformMatrix = transformMatrix
        spriteBatch.begin()
        spriteBatch.disableBlending()
        spriteBatch.color = Color.WHITE
        spriteBatch.draw(background, 0f, 0f, 480f, 320f, 0, 0, 512, 512, false, false)
        spriteBatch.enableBlending()
        spriteBatch.draw(logo, 0f, (320 - 128).toFloat(), 480f, 128f, 0, 256, 512, 256, false, false)
        val text = "It is the end my friend.\nTouch to continue!"
        val layout = GlyphLayout(font, text)
        spriteBatch.setBlendFunction(GL20.GL_ONE, GL20.GL_ONE_MINUS_SRC_ALPHA)
        font.draw(spriteBatch, text, 0f, 160 + layout.height / 2, 480f, Align.center, true)
        spriteBatch.end()
    }

    override fun update(delta: Float) {
        if (Gdx.input.justTouched()) {
            isDone = true
        }
    }
}
