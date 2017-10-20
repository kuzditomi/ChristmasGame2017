import { Clickable, Video } from "./models";

export class GameDisplay {
    private $: (selector: string) => Element;
    private $$: (selector: string) => Element[];

    constructor(private document: Document) {
        this.$ = document.querySelector.bind(document);
        this.$$ = document.querySelectorAll.bind(document);
    }

    private get $video(): HTMLVideoElement {
        return this.$('#video') as HTMLVideoElement;
    }

    public get screen(): Element {
        return this.$('#screen');
    }

    public set title(title: string) {
        this.$('#title').innerHTML = title;
    }

    public set video(video: Video) {
        const $video = this.$video;

        $video.currentTime = video.from;

        $video.ontimeupdate = () => {
            if($video.currentTime > video.to && !$video.paused){
                $video.pause();
                video.onFinished && video.onFinished();
            }
        };
    }

    public get clickables(): Element[] {
        return this.$$('.clickable');
    }

    public AddClickable(clickable: Clickable, clickCallback: () => void) {
        const $clickable = document.createElement("div");

        $clickable.classList.add("clickable");
        $clickable.onclick = () => {
            clickCallback();
        };

        this.screen.appendChild($clickable);
    }

    public StartVideo() {
        this.$video.play();
    }
}