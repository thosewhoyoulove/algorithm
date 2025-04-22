Function.prototype.myCall = function (context, ...args) {
    const ctx = context === undefined || context === null ? globalThis : Object(context);
    const fnSymbol = Symbol();
    ctx[fnSymbol] = this;
    const result = ctx[fnSymbol](...args);
    delete ctx[fnSymbol];
    return result;
};

Function.prototype.myApply = function (context, args) {
    const ctx = context === undefined || context === null ? globalThis : Object(context);
    const fnSymbol = Symbol();
    ctx[fnSymbol] = this;
    const result = args ? ctx[fnSymbol](...args) : ctx[fnSymbol]();
    delete ctx[fnSymbol];
    return result;
};

Function.prototype.myBind = function (context, ...args) {
    const fn = this;
    return function (...innerArgs) {
        // 判断调用时是否是通过 new 操作符调用的
        if (new.target) {
            // 使用原函数的 this 和所有的参数进行调用
            return new fn(...args, ...innerArgs);
        }
        return fn.apply(context, [...args, ...innerArgs]);
    };
};
