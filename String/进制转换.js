//描述
//对于给定的十六进制数，输出其对应的十进制表示。
//在本题中，十六进制数的格式为：0x开头，后跟若干个十六进制数字（ 0-9 和 A-F ）。其中，A-F 依次代表 10-15 。
// 输入描述：
// 输入一个十六进制的数值字符串。
// 输出描述：
// 输出该数值的十进制字符串。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    const str = await readline();
    const hex = str.slice(2); // 去掉"0X"前缀
    let result = 0;

    // 使用数学公式计算
    for (let i = 0; i < hex.length; i++) {
        // 计算当前位的权重：16^(length-1-i)
        const power = hex.length - 1 - i;
        // 当前位的值 * 16的次方
        result += parseInt(hex[i], 16) * Math.pow(16, power);
    }

    console.log(result);
})();
