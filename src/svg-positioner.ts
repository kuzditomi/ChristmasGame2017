export class SVGPositioner {
    private scaleX: number;
    private scaleY: number;
    private scale: number;

    private $paths: SVGPathElement[] = [];
    private get $video() {
        return this.document.getElementById('video') as any as HTMLVideoElement;
    }

    constructor(private document: Document) {
        this.calculateRatios();
        this.setSVGSize();

        window.onresize = () => {
            this.calculateRatios();

            for (const $path of this.$paths) {
                this.applyCss($path);
            }

            this.setSVGSize();
        };
    }

    public FixPositionOf(id: string) {
        const path = document.getElementById(id) as any as SVGPathElement; // lol
        this.$paths.push(path);

        this.applyCss(path);
    }

    private calculateRatios() {
        const clientRect = this.$video.getBoundingClientRect();

        this.scaleX = clientRect.width / 1366;
        this.scaleY = clientRect.height / 768;
        this.scale = Math.max(this.scaleX, this.scaleY);
    }

    private setSVGSize() {
        const $svg = this.document.getElementById("svg") as any as SVGElement;
        const $video = this.$video;

        $svg.style.width = $video.getBoundingClientRect().width + "px";
        $svg.style.height = $video.getBoundingClientRect().height + "px";
    }

    private applyCss($path: SVGPathElement) {
        const translateX = parseInt($path.getAttribute("x")) * this.scaleX;
        const translateY = parseInt($path.getAttribute("y")) * this.scaleY;

        const diff = 0;

        $path.style.transform = `translateX(${translateX * (1 - diff)}px) translateY(${translateY * (1 - diff)}px) scale(${this.scale * (1 + diff)})`;
        $path.style.display = "none";
    }
}