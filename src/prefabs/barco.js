import Phaser from 'phaser'

class Barco extends Phaser.Sprite {

  constructor (game, x, y, barcoNome) {
    super(game, x, y, barcoNome)

    this.game.physics.arcade.enableBody(this)

    this.body.immovable = false

  }

}

export default Barco
