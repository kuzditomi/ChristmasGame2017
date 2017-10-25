import { Game } from "./game";
import { GameBuilder } from "./game-builder";
import { GameDisplay } from "./game-display";

document.addEventListener("DOMContentLoaded", function (event) {
    const video = document.getElementById("video") as any as HTMLVideoElement;

    video.onloadeddata = () => {
        const gamebuilder = new GameBuilder(document);

        const settings = gamebuilder
            .AddScreen("start", sb => sb
                .SetVideo(0, 1)
                .AddClickable("doboz", "2.1")
            )
            .AddScreen("2.1", sb => sb
                .SetVideo(1, 2)
            )
            .GameSettings;


        const display = new GameDisplay(document);
        const game = new Game(settings, display);

        game.start();
    };
});