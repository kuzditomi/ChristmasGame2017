import { Screen, Item } from "./models";
import { SVGPositioner } from "./svg-positioner"

export class ScreenBuilder {
    private screen: Screen;
    private document: Document;

    public get Screen() {
        return this.screen;
    }

    constructor(name: string, private svgPositioner: SVGPositioner) {
        this.screen = {
            name,
            clickables: [],
            video: null
        };
    }

    public AddClickable(svgId: string, nextScreen: string): ScreenBuilder {
        this.screen.clickables.push({
            svgId,
            nextScreen
        });

        this.svgPositioner.FixPositionOf(svgId);

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