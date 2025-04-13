//对于给定的正实数 x ，输出其四舍五入后的整数。更具体地说，若 x 的小数部分大于等于 0.5，则输出向上取整后的整数；否则输出向下取整
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    const x = await readline();
    let [intPart, decimalPart] = x.toString().split(".");
    intPart = parseInt(intPart);
    decimalPart = decimalPart ? parseFloat("0." + decimalPart) : 0;
    if (decimalPart >= 0.5) {
        console.log(intPart + 1);
    } else {
        console.log(intPart);
    }
})();
