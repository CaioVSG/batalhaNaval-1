import Phaser from 'phaser'
import Water from '../prefabs/water.js'
import Barco from '../prefabs/barco.js'

export default class extends Phaser.State {

  init () {
    this.barco = null;
  }
  preload () { }

  create () {
    this.createWater()
  }

  createWater(){
    this.watersPlayer = this.game.add.group()
    this.watersIA = this.game.add.group()
    this.generateWater(this.watersPlayer, 275, 10)
    //this.generateWater(this.watersIA, 900, 100)
    this.createBarco('battleship', 'battleship')
  }

  createBarco(nomeBarco1, nomeBarco2){
    this.barco = new Barco(this.game, 50, 100, nomeBarco1)
    this.barco2 = new Barco(this.game,50, 400, nomeBarco2)
    this.game.add.existing(this.barco)
    this.game.add.existing(this.barco2)

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

  update(){
    this.game.physics.arcade.collide(this.barco, this.watersPlayer, this.colisaoHandler, null, this)
    this.game.physics.arcade.collide(this.barco, this.barco2, this.colisaoHandlerBarco, null, this)

  }

  colisaoHandler(){
    this.barco.x = this.aproximacaoX()
    this.barco.y = this.aproximacaoY()
  }

  colisaoHandlerBarco(){
    console.log('barcoBateu')
  }

  aproximacaoY(){
    var i;

    if(this.barco.nomeBarco == 'carrier'){

      for(i=10; i<376; i+=61){
        if(i <= this.barco.y && this.barco.y <= i+61){
          return i+7
        }
      }
      if(this.barco.y > 376){
        return 383
      }
      if(this.barco.y < 10){
        return 17
      }

    }

    if(this.barco.nomeBarco == 'cruiser'){
      for(i=10; i<437; i+=61){
        if(i <= this.barco.y && this.barco.y <= i+61){
          return i+11
        }
      }
      if(this.barco.y > 437){
        return  448
      }
      if(this.barco.y < 10){
        return 21
      }
    }

    if(this.barco.nomeBarco == 'battleship'){
      for(i=10; i<254; i+=61){
        if(i <= this.barco.y && this.barco.y <= i+61){
          return i+18
        }
      }
      if(this.barco.y > 254){
        return 272
      }
      if(this.barco.y < 10){
        return 28
      }
    }

    if(this.barco.nomeBarco == 'destroyer'){
      for(i=10; i<437; i+=61){
        if(i <= this.barco.y && this.barco.y <= i+61){
          return i+25
        }
      }
      if(this.barco.y > 437){
        return 462
      }
      if(this.barco.y < 10){
        return 35
      }
    }

    else{
      for(i=10; i<559; i+=61){
        if(i <= this.barco.y && this.barco.y <= i+61){
          return i+3
        }
      }
      if(this.barco.y > 559){
        return 562
      }
      if(this.barco.y < 10){
        return 13
      }
    }

  }

  aproximacaoX(){
    var i;
    if(this.barco.nomeBarco == 'carrier') {
      for(i=295; i<844; i+=61){
        if (i<= this.barco.x && this.barco.x <=i+61){
          return i+5;
        }
      }
      if(this.barco.x > 844){
        return 849;
      }
      if(this.barco.x < 295){
        return 300;
      }

    }

    if(this.barco.nomeBarco == 'cruiser'){
      for(i=295; i<844; i+=61){
        if (i<= this.barco.x && this.barco.x <=i+61){
          return i+15;
        }
      }
      if(this.barco.x > 844){
        return 859;
      }
      if(this.barco.x < 295) {
        return 310;
      }
    }

    if(this.barco.nomeBarco == 'battleship'){
      for(i=295; i<844; i+=61){
        if (i<= this.barco.x && this.barco.x <=i+61){
          return i+5;
        }
      }
      if(this.barco.x > 844){
        return 849;
      }
      if(this.barco.x < 295){
        return 300;
      }
    }

    if(this.barco.nomeBarco == 'destroyer'){
      for(i=295; i<844; i+=61){
        if (i<= this.barco.x && this.barco.x <=i+61){
          return i+15;
        }
      }
      if(this.barco.x > 844){
        return 859;
      }
      if(this.barco.x < 295){
        return 310;
      }
    }

    else{
      for(i=295; i<844; i+=61){
        if (i<= this.barco.x && this.barco.x <=i+61){
          return i+24;
        }
      }
      if(this.barco.x > 844){
        return 868;
      }
      if(this.barco.x < 295){
        return 319;
      }
    }
  }

  render () {

  }
}
