package com.badlogic.invaders.desktop

import com.badlogic.gdx.backends.lwjgl.LwjglApplication
import com.badlogic.gdx.backends.lwjgl.LwjglApplicationConfiguration
import com.badlogic.invaders.Invaders

object DesktopLauncher {
    @JvmStatic
    fun main(arg: Array<String>) {
        val config = LwjglApplicationConfiguration()
        config.width = 480
        config.height = 320
        config.title = "Invaders"
        LwjglApplication(Invaders(), config)
    }
}