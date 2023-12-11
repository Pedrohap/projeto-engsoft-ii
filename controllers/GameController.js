const Game = require('../models/Game');


class GameController{
    constructor(){
        let game1 = new Game(1,"Super Smash Bros Ultimate","Luta","/images/gameThumbnails/###","L")
        let game2 = new Game(2,"Mortal Kombat 1","Luta","/images/gameThumbnails/###","18")
        let game3 = new Game(3,"Dragon Ball FighterZ","Luta","/images/gameThumbnails/###","10")
        let game4 = new Game(4,"Tekken 7","Luta","/images/gameThumbnails/###","14")

        this._idCounter = 4;
        // Armazenando os torneios em um array chamado tournamentsBD
        this._gamesBD = [game1, game2, game3, game4];
    }
}

module.exports = GameController