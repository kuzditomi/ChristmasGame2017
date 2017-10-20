export interface Video {
    from: number;
    to: number;
    onFinished?: () => void;
}