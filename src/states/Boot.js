import Phaser from 'phaser'
import WebFont from 'webfontloader'
import config from '../config'
import globals from './globals/variaveis'
import { clone } from 'lodash'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#000000'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  create (){
    this.initVariaveisGlobais()
  }

  initVariaveisGlobais(){
    this.game.global = clone(globals)
  }

  preload () {
    if (config.webfonts.length) {
      WebFont.load({
        google: {
          families: config.webfonts
        },
        active: this.fontsLoaded
      })
    }

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    //gameLoader
    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')

    //Barcos
    this.load.image('cruiser', './assets/images/cruiser.png')
    this.load.image('battleship', './assets/images/battleship.png')
    this.load.image('carrier', './assets/images/carrier.png')
    this.load.image('submarine', './assets/images/submarine.png')
    this.load.image('destroyer', './assets/images/destroyer.png')

    //water
    this.load.image('water', './assets/images/water.png')


  }

  render () {
    if (config.webfonts.length && this.fontsReady) {
      this.state.start('Splash')
    }
    if (!config.webfonts.length) {
      this.state.start('Splash')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
