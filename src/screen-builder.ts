import { Screen, Item } from "./models";

export class ScreenBuilder {
    private screen: Screen;
    
    public get Screen() {
        return this.screen;
    }

    constructor(name: string) {
        this.screen = {
            name,
            clickables: [],
            video: null
        };
    }

    public AddClickable(item: Item, screen: string): ScreenBuilder {
        this.screen.clickables.push({ item, screen });

        return this;
    }

    public SetVideo(from: number, to: number): ScreenBuilder {
        this.screen.video = {
            from,
            to
        };

        return this;
    }
}