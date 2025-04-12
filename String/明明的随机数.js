//明明的随机数
//描述
// 对于明明生成的 n 个 1 到 500 之间的随机整数，你需要帮助他完成以下任务：
// - 删去重复的数字，即相同的数字只保留一个，把其余相同的数去掉；
// - 然后再把这些数从小到大排序，按照排好的顺序输出。
// 输入描述：
// 第一行输入一个整数
// n
// n (1≦n≦1000)，代表明明生成的数字个数。
// 此后
// n 行，第 i 行输入一个整数 ai (1≦ai≦500)，代表明明生成的第 i 个数字。
// 输出描述：
// 输出若干行，每行输出一个整数，代表输入数据排序后的结果。第一行输出最小的数字。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const n = await readline();
    const arr = [];
    for (let i = 0; i < n; i++) {
        const ai = await readline();
        arr.push(ai);
    }
    //输出若干行
    console.log([...new Set(arr)].sort((a, b) => a - b).join("\n"));
})();
