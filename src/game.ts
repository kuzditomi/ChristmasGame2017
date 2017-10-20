import { GameSettings, Screen, Clickable } from "./models";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

export class Game {
    private screens: { [name: string]: Screen }

    private get $screen(): Element {
        return $('.screen');
    }

    private set $title(title: string) {
        $('.title').innerHTML = title;
    }

    private get $clickables(): NodeListOf<Element> {
        return $$('.clickable');
    }

    constructor(private settings: GameSettings) {
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

        this.$title = screen.name;
        screen.clickables.forEach(c => this.AddClickable(c));
    }

    private AddClickable(clickable: Clickable) {
        const $clickable = document.createElement("div");

        $clickable.classList.add("clickable");
        $clickable.onclick = () => {
            this.onClick(clickable.screen);
        };

        this.$screen.appendChild($clickable);
    }

    private onClick(screenName: string) {
        const screen = this.screens[screenName];
        this.Display(screen);
    }

    private Clear(): void {
        this.$title = "";

        while (this.$clickables.length > 0) {
            this.$clickables[0].remove();
        }
    }
}