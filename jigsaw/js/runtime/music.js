let instance

/**
 * 统一的音效管理器
 */
export default class Music {
  constructor() {
    if ( instance )
      return instance

    instance = this

    this.bgmAudio = new Audio()
    this.bgmAudio.src  = 'audio/bgm.mp3'

    this.clickAudio = new Audio()
    this.clickAudio.src = 'audio/click.mp3'

    this.moveAudio = new Audio()
    this.moveAudio.src = 'audio/move.mp3'

    this.successAudio = new Audio()
    this.successAudio.src = 'audio/success.mp3'

    this.playBgm()
  }

  playBgm() {
    this.bgmAudio.play()
  }

  clickBtnbgm(){
    this.clickAudio.currentTime = 0
    this.clickAudio.play()
  }

  movebgm() {
    this.moveAudio.currentTime = 0
    this.moveAudio.play()
  }

  successbgm(){
    this.successAudio.currentTime = 0
    this.successAudio.play()
  }
}
