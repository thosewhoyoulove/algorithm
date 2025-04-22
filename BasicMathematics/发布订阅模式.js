class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(event, callback) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(callback);
    }
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(cb => {
                cb.apply(this, args);
            });
        }
    }
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
    once(event, callback) {
        const wrapper = (...args) => {
            callback.apply(this, args);
            this.off(event, wrapper);
        };
        this.on(event, wrapper);
    }
}
// 我们实现一个 EventEmitter 类，它支持以下方法：
const bus = new EventEmitter();
const callback = data => {
    console.log(data);
};

// bus.on("event1", callback); // 订阅事件
// bus.emit("event1", "hello"); // 发布事件
//bus.off("event1", callback);
// bus.once("event1", callback);
// bus.emit("event1", "hello");
// bus.emit("event1", "hello");
// console.log(bus.events, "bus.events");
