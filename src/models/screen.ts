import { Video } from "./video";
import { Item } from "./item";
import { Clickable } from "./clickable";

export interface Screen {
    name: string;
    video: Video;
    clickables: Clickable[];
}