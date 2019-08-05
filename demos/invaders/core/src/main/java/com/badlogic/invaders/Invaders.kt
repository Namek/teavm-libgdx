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

import com.badlogic.gdx.Application.ApplicationType
import com.badlogic.gdx.Files.FileType
import com.badlogic.gdx.Game
import com.badlogic.gdx.Gdx
import com.badlogic.gdx.Input.Keys
import com.badlogic.gdx.InputAdapter
import com.badlogic.gdx.audio.Music
import com.badlogic.gdx.controllers.Controller
import com.badlogic.gdx.controllers.ControllerAdapter
import com.badlogic.gdx.controllers.Controllers
import com.badlogic.gdx.graphics.FPSLogger
import com.badlogic.gdx.utils.Array
import com.badlogic.invaders.screens.GameLoop
import com.badlogic.invaders.screens.GameOver
import com.badlogic.invaders.screens.InvadersScreen
import com.badlogic.invaders.screens.MainMenu

class Invaders : Game() {

    /** Music needs to be a class property to prevent being disposed.  */
    private var music: Music? = null
    private var fps: FPSLogger? = null

    var controller: Controller? = null
        private set
    private val controllerListener = object : ControllerAdapter() {
        override fun connected(c: Controller?) {
            if (controller == null) {
                controller = c
            }
        }

        override fun disconnected(c: Controller?) {
            if (controller === c) {
                controller = null
            }
        }
    }

    override fun render() {
        val currentScreen = getScreen()

        // update the screen
        currentScreen.render(Gdx.graphics.deltaTime)

        // When the screen is done we change to the
        // next screen. Ideally the screen transitions are handled
        // in the screen itself or in a proper state machine.
        if (currentScreen.isDone) {
            // dispose the resources of the current screen
            currentScreen.dispose()

            // if the current screen is a main menu screen we switch to
            // the game loop
            if (currentScreen is MainMenu) {
                setScreen(GameLoop(this))
            }
            else {
                // if the current screen is a game loop screen we switch to the
                // game over screen
                if (currentScreen is GameLoop) {
                    setScreen(GameOver(this))
                }
                else if (currentScreen is GameOver) {
                    // if the current screen is a game over screen we switch to the
                    // main menu screen
                    setScreen(MainMenu(this))
                }
            }
        }

        fps!!.log()
    }

    override fun create() {
        val controllers = Controllers.getControllers()
        if (controllers.size > 0) {
            controller = controllers.first()
        }
        Controllers.addListener(controllerListener)

        setScreen(MainMenu(this))
        music = Gdx.audio.newMusic(Gdx.files.getFileHandle("data/8.12.mp3", FileType.Internal))
        music!!.isLooping = true
        music!!.play()
        Gdx.input.inputProcessor = object : InputAdapter() {
            override fun keyUp(keycode: Int): Boolean {
                if (keycode == Keys.ENTER && Gdx.app.type == ApplicationType.WebGL) {
                    if (!Gdx.graphics.isFullscreen) Gdx.graphics.setFullscreenMode(Gdx.graphics.displayModes[0])
                }
                return true
            }
        }

        fps = FPSLogger()
    }

    /** For this game each of our screens is an instance of InvadersScreen.
     * @return the currently active [InvadersScreen].
     */
    override fun getScreen(): InvadersScreen {
        return super.getScreen() as InvadersScreen
    }
}
