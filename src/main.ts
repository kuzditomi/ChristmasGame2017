import { Game } from "./game";
import { GameBuilder } from "./game-builder";
import { GameDisplay } from "./game-display";

var gamebuilder = new GameBuilder();

var settings = gamebuilder
    .AddScreen("start", sb => {
        sb
            .SetVideo("1")
            .AddClickable({}, "masodik")
    })
    .AddScreen("masodik", sb => {
        sb
            .SetVideo("2")
            .AddClickable({}, "start")
    })
    .GameSettings;

const display = new GameDisplay(document);
const game = new Game(settings, display);

game.start();