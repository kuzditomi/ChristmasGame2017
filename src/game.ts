import { GameSettings, Screen, Clickable } from "./models";
import { GameDisplay } from "./game-display";

export class Game {
    private screens: { [name: string]: Screen }

    constructor(private settings: GameSettings, private gameDisplay: GameDisplay) {
        // create screen hash
        this.screens = settings.screens.reduce((screens, screen) => {
            screens[screen.name] = screen;
            return screens;
        }, {});
    }

    start() {
        const startScreen = this.settings.screens[0];
        this.Display(startScreen);
    }

    private Display(screen: Screen) {
        this.Clear();

        screen.video.onFinished = () => {
            screen.clickables.forEach(c => this.gameDisplay.AddClickable(c, () => this.onClick(c.screen)));
        };

        this.gameDisplay.title = screen.name;
        this.gameDisplay.video = screen.video;

        this.gameDisplay.StartVideo();
    }

    private onClick(screenName: string) {
        const screen = this.screens[screenName];
        this.Display(screen);
    }

    private Clear(): void {
        this.gameDisplay.title = "";

        while (this.gameDisplay.clickables.length > 0) {
            this.gameDisplay.clickables[0].remove();
        }
    }
}