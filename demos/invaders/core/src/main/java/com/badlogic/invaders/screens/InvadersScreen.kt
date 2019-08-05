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

import com.badlogic.gdx.Screen
import com.badlogic.invaders.Invaders

/** Common class for a game screen, e.g. main menu, game loop, game over screen and so on.
 * @author mzechner
 */
abstract class InvadersScreen(protected var invaders: Invaders) : Screen {

    /** Called by GdxInvaders to check whether the screen is done.
     * @return true when the screen is done, false otherwise
     */
    abstract val isDone: Boolean

    /** Called when the screen should update itself, e.g. continue a simulation etc.  */
    abstract fun update(delta: Float)

    /** Called when a screen should render itself  */
    abstract fun draw(delta: Float)

    override fun render(delta: Float) {
        update(delta)
        draw(delta)
    }

    override fun resize(width: Int, height: Int) {}

    override fun show() {}

    override fun hide() {}

    override fun pause() {}

    override fun resume() {}

    override fun dispose() {}
}
