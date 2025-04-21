// 我们实现一个 EventEmitter 类，它支持以下方法：
// const bus = new EventEmitter();

// bus.on("event1", callback); // 订阅事件
// bus.emit("event1", data); // 发布事件
// bus.off("event1", callback); // 取消订阅
// bus.once("event1", callback); // 仅触发一次

class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb.apply(this, args));
    }
  }
  off(event, callback) {
    if (this.events[event]) {
      this.events[event].filter(cb => cb !== callback);
    }
  }
  once(event, callback) {
    const wrapper = (...args) => {
      callback.apply(this, args);
      this.off(event, callback);
    };
    this.on(event, wrapper);
  }
}
