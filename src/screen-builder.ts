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

    public SetVideo(name: string): ScreenBuilder {
        this.screen.video = {
            source: this.videoPath(name),
        };

        return this;
    }

    private videoPath(name: string): string {
        return `vid/${name}.mp4`;
    }
}