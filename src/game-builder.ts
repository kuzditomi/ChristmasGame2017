import { GameSettings, Screen, Video } from "./models";
import { ScreenBuilder } from "./screen-builder";

export class GameBuilder {
    private settings: GameSettings;

    public get GameSettings() { return this.GameSettings };

    constructor(settings?: GameSettings) {
        this.settings = settings || { screens: [] };
    }

    public AddScreen(name: string, builderCallback: (screenBuilder: ScreenBuilder) => void): GameBuilder {
        const builder = new ScreenBuilder(name);
        
        builderCallback(builder);

        this.settings.screens.push(builder.Screen);

        return this;
    }
}