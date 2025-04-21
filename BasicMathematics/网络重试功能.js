// 用js实现一个函数，接受三个参数，fn,times，delay，返回一个新的函数，能实现fn的重试
function retry(fn, times, delay) {
  return async function (...args) {
    let attempt = 0;
    while (attempt < times) {
      try {
        return await fn.apply(this, args);
      } catch (err) {
        attempt++;
        if (attempt >= times) throw err;
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  };
}
// 模拟失败2次的函数
let count = 0;
const unstableFn = () => {
  return new Promise((resolve, reject) => {
    count++;
    if (count < 3) {
      reject("失败了一次");
    } else {
      resolve("成功啦！");
    }
  });
};

const safeFn = retry(unstableFn, 5, 1000);

safeFn().then(console.log).catch(console.error);
