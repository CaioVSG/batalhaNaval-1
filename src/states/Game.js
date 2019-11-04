import Phaser from 'phaser'
import Water from '../prefabs/water.js'
import Barco from '../prefabs/barco.js'

export default class extends Phaser.State {
  init () { }
  preload () { }
  create () {
    this.createWater()
    this.createBarco()
  }

  createWater(){
    this.waters = this.game.add.group()
    this.generateWater(this.waters, 100, 100)
    this.generateWater(this.waters, 900, 100)
  }

  generateWater(waterGroup, comecoX, comecoY){
    let water

    for(var x = comecoX; x < comecoX+610; x+= 61){
      for(var y = comecoY; y < comecoY+610; y+= 61){
        water = new Water(this.game, x, y)
        waterGroup.add(water)
      }
    }
    return waterGroup
  }

  createBarco(){
    this.barcos = this.game.add.group()
    this.generateBarcos(this.barcos)
  }

  generateBarcos(){

  }

  setUpText(){
  }
  render () {

  }

}
