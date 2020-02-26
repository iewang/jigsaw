import Databus from '../databus'
import Button from '../base/button'
import GameInfo from '../runtime/gameinfo'
import Music from '../runtime/music'

const BG_IMG_SRC = 'images/background.png'
const TITLE_IMG_SRC = 'images/jigsaw.png'
const PLAY_IMG_SRC = 'images/play.png'



let databus = new Databus

export default class Start {
    constructor() {


        this.music = new Music()
        this.BGImg = new Image()
        this.BGImg.src = BG_IMG_SRC

        this.TitleImg = new Image()
        this.TitleImg.src = TITLE_IMG_SRC

        this.PlayImg = new Image()
        this.PlayImg.src = PLAY_IMG_SRC

        this.playbtn = new Button(
            PLAY_IMG_SRC,
            (databus.screenWidth - 153) / 2,
            (databus.screenHeight / 3.7) * 2.8,
            153,
            88
        )
        this.gameinfo = new GameInfo()
    }

    tapScenceChange(event) {
        
        if(this.playbtn.isTapped(event.x, event.y) && databus.flag) {
            this.music.clickBtnbgm()
            databus.scenechange = true
            
        }
    }


    render(ctx) {
        ctx.drawImage (
            this.BGImg,
            0,
            0,
            databus.screenWidth,
            databus.screenHeight
        )

        ctx.drawImage (
            this.TitleImg,
            (databus.screenWidth - 254) / 2,
            databus.screenHeight / 6,
            254,
            73
        )

        this.playbtn.render(ctx)

        // ctx.drawImage (
        //     this.PlayImg,
        //     (databus.screenWidth - 153) / 2,
        //     (databus.screenHeight / 3) * 2,
        //     153,
        //     88
        // )
    }
}