import { GameSettings, Screen, Video } from "./models";
import { ScreenBuilder } from "./screen-builder";
import { SVGPositioner } from "./svg-positioner";

export class GameBuilder {
    private settings: GameSettings;
    private svgPositioner: SVGPositioner;

    public get GameSettings() { return this.settings };

    constructor(private document: Document, settings?: GameSettings, ) {
        this.settings = settings || { screens: [] };
        this.svgPositioner = new SVGPositioner(document);
    }

    public AddScreen(name: string, builderCallback: (screenBuilder: ScreenBuilder) => void): GameBuilder {
        const builder = new ScreenBuilder(name, this.svgPositioner);

        builderCallback(builder);

        this.settings.screens.push(builder.Screen);

        return this;
    }
}