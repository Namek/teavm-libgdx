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

import java.util.ArrayList

import com.badlogic.gdx.Gdx
import com.badlogic.gdx.graphics.GL20
import com.badlogic.gdx.graphics.Mesh
import com.badlogic.gdx.graphics.Pixmap.Format
import com.badlogic.gdx.graphics.Texture
import com.badlogic.gdx.graphics.Texture.TextureFilter
import com.badlogic.gdx.graphics.VertexAttribute
import com.badlogic.gdx.graphics.VertexAttributes.Usage
import com.badlogic.gdx.graphics.g3d.Material
import com.badlogic.gdx.graphics.g3d.Model
import com.badlogic.gdx.graphics.g3d.attributes.BlendingAttribute
import com.badlogic.gdx.graphics.g3d.attributes.ColorAttribute
import com.badlogic.gdx.graphics.g3d.attributes.TextureAttribute
import com.badlogic.gdx.graphics.g3d.loader.ObjLoader
import com.badlogic.gdx.graphics.g3d.utils.ModelBuilder
import com.badlogic.gdx.math.Vector3
import com.badlogic.gdx.utils.Disposable

class Simulation : Disposable {

    var invaders = ArrayList<Invader>()
    var blocks = ArrayList<Block>()
    var shots = ArrayList<Shot>()
    var explosions = ArrayList<Explosion>()
    lateinit var ship: Ship
    var shipShot: Shot? = null
    @Transient
    var listener: SimulationListener? = null
    var multiplier = 1f
    var score: Int = 0
    var wave = 1

    lateinit var shipModel: Model
    lateinit var invaderModel: Model
    lateinit var blockModel: Model
    lateinit var shotModel: Model
    lateinit var explosionModel: Model

    private val removedShots = ArrayList<Shot>()
    private val removedExplosions = ArrayList<Explosion>()

    private val tmpV1 = Vector3()
    private val tmpV2 = Vector3()

    init {
        populate()
    }

    private fun populate() {
        val objLoader = ObjLoader()
        shipModel = objLoader.loadModel(Gdx.files.internal("data/ship.obj"))
        invaderModel = objLoader.loadModel(Gdx.files.internal("data/invader.obj"))
        blockModel = objLoader.loadModel(Gdx.files.internal("data/block.obj"))
        shotModel = objLoader.loadModel(Gdx.files.internal("data/shot.obj"))

        val shipTexture = Texture(Gdx.files.internal("data/ship.png"), Format.RGB565, true)
        shipTexture.setFilter(TextureFilter.MipMap, TextureFilter.Linear)
        val invaderTexture = Texture(Gdx.files.internal("data/invader.png"), Format.RGB565, true)
        invaderTexture.setFilter(TextureFilter.MipMap, TextureFilter.Linear)
        shipModel.materials.get(0).set(TextureAttribute.createDiffuse(shipTexture))
        invaderModel.materials.get(0).set(TextureAttribute.createDiffuse(invaderTexture))

        (blockModel.materials.get(0).get(ColorAttribute.Diffuse) as ColorAttribute).color.set(0f, 0f, 1f, 0.5f)
        blockModel.materials.get(0).set(BlendingAttribute(GL20.GL_SRC_ALPHA, GL20.GL_ONE_MINUS_SRC_ALPHA))

        shotModel.materials.get(0).set(ColorAttribute.createDiffuse(1f, 1f, 0f, 1f))

        val explosionTexture = Texture(Gdx.files.internal("data/explode.png"), Format.RGBA4444, true)
        explosionTexture.setFilter(TextureFilter.MipMap, TextureFilter.Linear)

        val explosionMesh = Mesh(true, 4 * 16, 6 * 16, VertexAttribute(Usage.Position, 3, "a_position"),
            VertexAttribute(Usage.TextureCoordinates, 2, "a_texCoord0"))

        val vertices = FloatArray(4 * 16 * (3 + 2))
        val indices = ShortArray(6 * 16)
        var idx = 0
        var index = 0
        for (row in 0..3) {
            for (column in 0..3) {
                vertices[idx++] = 1f
                vertices[idx++] = 1f
                vertices[idx++] = 0f
                vertices[idx++] = 0.25f + column * 0.25f
                vertices[idx++] = 0 + row * 0.25f

                vertices[idx++] = -1f
                vertices[idx++] = 1f
                vertices[idx++] = 0f
                vertices[idx++] = 0 + column * 0.25f
                vertices[idx++] = 0 + row * 0.25f

                vertices[idx++] = -1f
                vertices[idx++] = -1f
                vertices[idx++] = 0f
                vertices[idx++] = 0f + column * 0.25f
                vertices[idx++] = 0.25f + row * 0.25f

                vertices[idx++] = 1f
                vertices[idx++] = -1f
                vertices[idx++] = 0f
                vertices[idx++] = 0.25f + column * 0.25f
                vertices[idx++] = 0.25f + row * 0.25f

                val t = (4 * row + column) * 4
                indices[index++] = t.toShort()
                indices[index++] = (t + 1).toShort()
                indices[index++] = (t + 2).toShort()
                indices[index++] = t.toShort()
                indices[index++] = (t + 2).toShort()
                indices[index++] = (t + 3).toShort()
            }
        }

        explosionMesh.setVertices(vertices)
        explosionMesh.setIndices(indices)

        val modelBuilder = ModelBuilder()
        modelBuilder.begin()
        modelBuilder.part("explosion", explosionMesh, GL20.GL_TRIANGLES,
            Material(BlendingAttribute(GL20.GL_SRC_ALPHA, GL20.GL_ONE_MINUS_SRC_ALPHA),
                TextureAttribute.createDiffuse(explosionTexture))
        )
        explosionModel = modelBuilder.end()

        ship = Ship(shipModel)
        ship.transform.rotate(0f, 1f, 0f, 180f)

        for (row in 0..3) {
            for (column in 0..7) {
                val invader = Invader(invaderModel, -PLAYFIELD_MAX_X / 2 + column * 2f, 0f, PLAYFIELD_MIN_Z + row * 2f)
                invaders.add(invader)
            }
        }

        for (shield in 0..2) {
            blocks.add(Block(blockModel, (-10 + shield * 10 - 1).toFloat(), 0f, -2f))
            blocks.add(Block(blockModel, (-10 + shield * 10 - 1).toFloat(), 0f, -3f))
            blocks.add(Block(blockModel, (-10 + shield * 10 + 0).toFloat(), 0f, -3f))
            blocks.add(Block(blockModel, (-10 + shield * 10 + 1).toFloat(), 0f, -3f))
            blocks.add(Block(blockModel, (-10 + shield * 10 + 1).toFloat(), 0f, -2f))
        }
    }

    fun update(delta: Float) {
        ship.update(delta)
        updateInvaders(delta)
        updateShots(delta)
        updateExplosions(delta)
        checkShipCollision()
        checkInvaderCollision()
        checkBlockCollision()
        checkNextLevel()
    }

    private fun updateInvaders(delta: Float) {
        for (i in invaders.indices) {
            val invader = invaders[i]
            invader.update(delta, multiplier)
        }
    }

    private fun updateShots(delta: Float) {
        removedShots.clear()
        for (i in shots.indices) {
            val shot = shots[i]
            shot.update(delta)
            if (shot.hasLeftField) removedShots.add(shot)
        }

        for (i in removedShots.indices)
            shots.remove(removedShots[i])

        if (shipShot != null && shipShot!!.hasLeftField) shipShot = null

        if (Math.random() < 0.01 * multiplier && invaders.size > 0) {
            val index = (Math.random() * (invaders.size - 1)).toInt()
            invaders[index].transform.getTranslation(tmpV1)
            val shot = Shot(shotModel, tmpV1, true)
            shots.add(shot)
            if (listener != null) listener!!.shot()
        }
    }

    fun updateExplosions(delta: Float) {
        removedExplosions.clear()
        for (i in explosions.indices) {
            val explosion = explosions[i]
            explosion.update(delta)
            if (explosion.aliveTime > Explosion.EXPLOSION_LIVE_TIME) removedExplosions.add(explosion)
        }

        for (i in removedExplosions.indices)
            explosions.remove(removedExplosions[i])
    }

    private fun checkInvaderCollision() {
        if (shipShot == null) return

        for (j in invaders.indices) {
            val invader = invaders[j]
            invader.transform.getTranslation(tmpV1)
            shipShot!!.transform.getTranslation(tmpV2)
            if (tmpV1.dst(tmpV2) < Invader.INVADER_RADIUS) {
                shots.remove(shipShot!!)
                shipShot = null
                invaders.remove(invader)
                explosions.add(Explosion(explosionModel, tmpV1))
                if (listener != null) listener!!.explosion()
                score += Invader.INVADER_POINTS
                break
            }
        }
    }

    private fun checkShipCollision() {
        removedShots.clear()

        if (!ship.isExploding) {
            ship.transform.getTranslation(tmpV1)
            for (i in shots.indices) {
                val shot = shots[i]
                if (!shot.isInvaderShot) continue
                shot.transform.getTranslation(tmpV2)
                if (tmpV1.dst(tmpV2) < Ship.SHIP_RADIUS) {
                    removedShots.add(shot)
                    shot.hasLeftField = true
                    ship.lives--
                    ship.isExploding = true
                    explosions.add(Explosion(explosionModel, tmpV1))
                    if (listener != null) listener!!.explosion()
                    break
                }
            }

            for (i in removedShots.indices)
                shots.remove(removedShots[i])
        }

        ship.transform.getTranslation(tmpV2)
        for (i in invaders.indices) {
            val invader = invaders[i]
            invader.transform.getTranslation(tmpV1)
            if (tmpV1.dst(tmpV2) < Ship.SHIP_RADIUS) {
                ship.lives--
                invaders.remove(invader)
                ship.isExploding = true
                explosions.add(Explosion(explosionModel, tmpV1))
                explosions.add(Explosion(explosionModel, tmpV2))
                if (listener != null) listener!!.explosion()
                break
            }
        }
    }

    private fun checkBlockCollision() {
        removedShots.clear()

        for (i in shots.indices) {
            val shot = shots[i]
            shot.transform.getTranslation(tmpV2)

            for (j in blocks.indices) {
                val block = blocks[j]
                block.transform.getTranslation(tmpV1)
                if (tmpV1.dst(tmpV2) < Block.BLOCK_RADIUS) {
                    removedShots.add(shot)
                    shot.hasLeftField = true
                    blocks.remove(block)
                    break
                }
            }
        }

        for (i in removedShots.indices)
            shots.remove(removedShots[i])
    }

    private fun checkNextLevel() {
        if (invaders.size == 0 && ship.lives > 0) {
            blocks.clear()
            shots.clear()
            shipShot = null
            ship.transform.getTranslation(tmpV1)
            val lives = ship.lives
            populate()
            ship.transform.setTranslation(tmpV1)
            ship.lives = lives
            multiplier += 0.2f
            wave++
        }
    }

    fun moveShipLeft(delta: Float, scale: Float) {
        if (ship.isExploding) return

        ship.transform.trn(-delta * Ship.SHIP_VELOCITY * scale, 0f, 0f)
        ship.transform.getTranslation(tmpV1)
        if (tmpV1.x < PLAYFIELD_MIN_X) ship.transform.trn(PLAYFIELD_MIN_X - tmpV1.x, 0f, 0f)
    }

    fun moveShipRight(delta: Float, scale: Float) {
        if (ship.isExploding) return

        ship.transform.trn(+delta * Ship.SHIP_VELOCITY * scale, 0f, 0f)
        ship.transform.getTranslation(tmpV1)
        if (tmpV1.x > PLAYFIELD_MAX_X) ship.transform.trn(PLAYFIELD_MAX_X - tmpV1.x, 0f, 0f)
    }

    fun shot() {
        if (shipShot == null && !ship.isExploding) {
            ship.transform.getTranslation(tmpV1)
            shipShot = Shot(shotModel, tmpV1, false)
            shots.add(shipShot!!)
            if (listener != null) listener!!.shot()
        }
    }

    override fun dispose() {
        shipModel.dispose()
        invaderModel.dispose()
        blockModel.dispose()
        shotModel.dispose()
        explosionModel.dispose()
    }

    companion object {
        val PLAYFIELD_MIN_X = -14f
        val PLAYFIELD_MAX_X = 14f
        val PLAYFIELD_MIN_Z = -15f
        val PLAYFIELD_MAX_Z = 2f
    }
}
