//实现函数柯里化
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function (...args2) {
            return curried.apply(this, args.concat(args2));
        };
    };
}

const add = curry((a, b) => a + b);

console.log(add(1, 2));
console.log(add(1)(2));

//实现防抖
function debounce(fn, delay) {
    let timer = null;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}
const fn = () => {
    console.log("debounced");
};
const debouncedFn = debounce(fn, 1000);
debouncedFn();

//实现节流
function throttle(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) return;
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay);
    };
}
