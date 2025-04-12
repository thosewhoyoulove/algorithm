// 给定一个非空字符串S，其被N个‘-’分隔成N+1的子串，给定正整数K，要求除第一个子串外，其余的子串每K个字符组成新的子串，并用‘-’分隔。对于新组成的每一个子串，如果它含有的小写字母比大写字母多，则将这个子串的所有大写字母转换为小写字母；反之，如果它含有的大写字母比小写字母多，则将这个子串的所有小写字母转换为大写字母；大小写字母的数量相等时，不做转换。
// 输入描述:
// 输入为两行，第一行为参数K，第二行为字符串S。
// 输出描述:
// 输出转换后的字符串。

const { log } = require("console");

// 示例1
// 输入
// 3
// 12abc-abCABc-4aB@
// 输出
// 12abc-abc-ABC-4aB-@
// 说明
// 子串为12abc、abCABc、4aB@，第一个子串保留，后面的子串每3个字符一组为abC、ABc、4aB、@，abC中小写字母较多，转换为abc，ABc中大写字母较多，转换为ABC，4aB中大小写字母都为1个，不做转换，@中没有字母，连起来即12abc-abc-ABC-4aB-@
// 示例2
// 输入
// 12
// 12abc-abCABc-4aB@
// 输出
// 12abc-abCABc4aB@
// 说明
// 子串为12abc、abCABc、4aB@，第一个子串保留，后面的子串每12个字符一组为abCABc4aB@，这个子串中大小写字母都为4个，不做转换，连起来即12abc-abCABc4aB@

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // 读取两行输入
    const kLine = await readline(); // 第一行：K
    const sLine = await readline(); // 第二行：字符串S

    const K = parseInt(kLine);
    const S = sLine;

    // 处理逻辑
    const parts = S.split("-");
    const first = parts[0];
    const rest = parts.slice(1).join("");
    const groups = [];
    for (let i = 0; i < rest.length; i += K) {
        groups.push(rest.slice(i, i + K));
    }
    const transformed = groups.map(group => {
        let lower = 0;
        let upper = 0;
        for (const char of group) {
            if (/^[a-z]/.test(char)) lower++;
            else if (/^[A-Z]/.test(char)) upper++;
        }
        if (lower > upper) return group.toLowerCase();
        else if (lower < upper) return group.toUpperCase();
    });
    const result = [first, ...transformed].join("-");
    console.log(result);
})();
