import { Item, Clickable } from "./models";

export class ClickableBuilder {
    private clickable: Clickable;

    public get Clickable() {
        return this.clickable;
    }

    constructor() {
        this.clickable = {
            item: {
                x: 0,
                y: 0
            },
            screen: ''
        };
    }

    public setX(value: number): ClickableBuilder {
        this.clickable.item.x = value;
        return this;
    }

    public setY(value: number): ClickableBuilder {
        this.clickable.item.y = value;
        return this;
    }

    public setNextScreen(screenName: string): ClickableBuilder {
        this.clickable.screen = screenName;
        return this;
    }
}