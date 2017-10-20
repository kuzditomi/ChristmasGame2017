import { Screen, Item } from "./models";
import { ClickableBuilder } from "./clickable-builder";

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

    public AddClickable(clickableBuilderCallback: (clickableBuilder: ClickableBuilder) => void): ScreenBuilder {
        const builder = new ClickableBuilder();
        
        clickableBuilderCallback(builder);
        const clickable = builder.Clickable;

        this.screen.clickables.push(clickable);

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