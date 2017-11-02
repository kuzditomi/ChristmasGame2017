import { Point } from "./point";

export class PathDrawer {
    constructor(private $path: SVGPathElement) {

    }

    public Draw(path: Point[]) {
        if (!path || !path.length)
            return;

        this.Erase();

        let pathDescription = `M${path[0].x} ${path[0].y} `;
        for (let i = 1; i < path.length; i++) {
            pathDescription += `L${path[i].x} ${path[i].y}`;
        }
        pathDescription += 'Z';

        this.$path.setAttribute("d", pathDescription);
    }

    public Erase() {
        this.$path.setAttribute("d", "");
    }
}