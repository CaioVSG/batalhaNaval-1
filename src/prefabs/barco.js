import Phaser from 'phaser'

class Barco extends Phaser.Sprite {


  constructor (game, x, y, barcoNome) {
    super(game, x, y, barcoNome)
    this.game.physics.arcade.enableBody(this)
    this.anchor.setTo(0.5,0.5)
    this.body.immovable = true
    this.movivel = true
    this.nomeBarco = barcoNome
    this.inputEnabled = true
    this.input.enableDrag(true)
  }

  update () {
    if(!this.movivel){
      this.input.disableDrag()
    }

  }
}

export default Barco
