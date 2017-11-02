import { Point } from "./point";
import { PathDrawer } from "./path-drawer";

export interface EditorWindow extends Window {
    editor: SVGEditor;
}

export class SVGEditor {
    private path: Point[];

    private get $editorSign() {
        return this.document.getElementById('editor-container');
    }

    constructor(private document: Document, private pathDrawer: PathDrawer) {
    }

    public Start() {
        this.$editorSign.style.display = 'block';
        console.log('SVG editor is switched on.');

        this.document.onclick = this.OnClick;
        this.path = [];
    }

    public Stop() {
        this.$editorSign.style.display = 'none';
        console.log('SVG editor is switched off.')
    }

    private Subscribe() {

    }

    private OnClick = (evt: MouseEvent) => {
        const point: Point = { x: evt.x, y: evt.y };

        this.path.push(point);
        this.pathDrawer.Draw(this.path);
    };
}