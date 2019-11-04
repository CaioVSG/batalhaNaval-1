import Phaser from 'phaser'

class Water extends Phaser.Sprite {

  constructor (game, x, y) {
    super(game, x, y, 'water')

    this.game.physics.arcade.enableBody(this)

    this.body.immovable = true

  }

}

export default Water
