export class Game {
    constructor(private message: string) {
    }

    write() {
        console.log(this.message);
    }
}