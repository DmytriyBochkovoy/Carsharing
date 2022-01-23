export default class Timer {
    constructor (options) {
        this.name = options?.name ?? "none";
        this.interval = options?.interval ?? 1000;
        this.velue = 1;
        this.callback = options?.callback;
    }

    start () {
        const callback = typeof (this.callback) == 'function'
            ? this.callback
            : () => {this.velue += 1}

        this.timer = setInterval(callback, this.interval);
    }

    stop () {
        clearInterval(this.timer);
    }
}