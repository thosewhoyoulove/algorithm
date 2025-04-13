// 对于给定的整数 n ，从小到大依次输出它的全部质因子。即找到这样的质数 p1,p2,⋯,pk ，使得
// n=p1×p2×⋯×pk 。
// 输入描述：
// 输入一个整数
// 输出描述：
// 从小到大输出它的全部质因子，每两个数之间用一个空格隔开。
// 示例1：
// 输入：
// 180
// 输出：
// 2 2 3 3 5
//hint: 一个合数的最小质因数不会超过它的平方根，
// 所以质因数分解只需要遍历到 √n，后面如果还剩一个大于 √n 的数，它就是最后一个质因数。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let n = await readline();
    let res = [];
    for (let i = 2; i * i <= n; i++) {
        while (n % i === 0) {
            res.push(i);
            n = n / i;
        }
    }
    if (n > 1) {
        res.push(n);
    }
    console.log(res.join(" "));
})();
