//字符串分隔
//描述
// 输入一个字符串，请按长度为8拆分每个输入字符串并进行输出；
// 长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
// 输入描述：
// 连续输入字符串(每个字符串长度小于等于100)
// 输出描述：
// 输出若干行，每行输出 8 个字符，代表按题意书写的结果。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const str = await readline();
    //计算需要加的0的个数
    //如果不能被8整除，则需要加0
    let result = "";
    if (str.length % 8 !== 0) {
        const zeroCount = 8 - (str.length % 8);
        const zeroStr = "0".repeat(zeroCount);
        result = str + zeroStr;
    } else {
        result = str;
    }
    //按长度为8分割
    for (let i = 0; i < result.length; i += 8) {
        console.log(result.slice(i, i + 8));
    }
})();
