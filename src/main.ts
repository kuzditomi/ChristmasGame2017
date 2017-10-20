import { Game } from "./game";
import { GameBuilder } from "./game-builder";

var gamebuilder = new GameBuilder();

var settings = gamebuilder
    .AddScreen("start", sb => {
        sb.AddClickable({}, "masodik")
    })
    .AddScreen("masodik", sb => {
        sb.AddClickable({}, "start")
    })
    .GameSettings;

const game = new Game(settings);

game.start();