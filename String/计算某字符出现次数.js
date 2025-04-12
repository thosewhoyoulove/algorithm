// 描述
// 对于给定的由大小写字母、数字和空格混合构成的字符串 s，统计字符 c 在其中出现的次数。具体来说：
// 若 c 为大写或者小写字母，统计其大小写形态出现的次数和；
// 若 c 为数字，统计其出现的次数。
// 保证字符 c 仅为大小写字母或数字。
// 输入描述：
// 第一行输入一个长度
//  ，由大小写字母、数字和空格混合构成的字符串 s 。保证首尾不为空格。
// 第二行输入一个字符 c ，代表需要统计的字符。
// 输出描述：
// 在一行上输出一个整数，代表字符 c 在字符串 s 中出现的次数。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const s = await readline();
    const c = await readline();
    let count = 0;
    const UpperCase = c.toUpperCase();
    const LowerCase = c.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if (s[i] === UpperCase || s[i] === LowerCase) {
            count++;
        }
    }
    console.log(count);
})();
