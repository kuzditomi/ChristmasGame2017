import { Game } from "./game";
import { GameBuilder } from "./game-builder";
import { GameDisplay } from "./game-display";

var gamebuilder = new GameBuilder();

var settings = gamebuilder
    .AddScreen("start", sb => sb
        .SetVideo(0, 1)
        .AddClickable(cb => cb
            .setX(20)
            .setY(30)
            .setNextScreen("2.1")
        )
        .AddClickable(cb => cb
            .setX(50)
            .setY(30)
            .setNextScreen("2.2")
        )
    )
    .AddScreen("2.1", sb => sb
        .SetVideo(1, 2)
        .AddClickable(cb => cb
            .setX(50)
            .setY(90)
            .setNextScreen("harom")
        )
    )
    .AddScreen("2.2", sb => sb
        .SetVideo(3, 4)
        .AddClickable(cb => cb
            .setX(30)
            .setY(90)
            .setNextScreen("harom")
        )
    )
    .AddScreen("harom", sb => sb
        .SetVideo(3, 4)
        .AddClickable(cb => cb
            .setX(30)
            .setY(90)
            .setNextScreen("start")
        )
    )
    .GameSettings;

const display = new GameDisplay(document);
const game = new Game(settings, display);

game.start();