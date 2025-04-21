/*
限制并发数函数
@param {Array} tasks 任务数组
@param {Number} limit 并发数
@return {Promise} 返回一个Promise对象
*/
function limitConcurrency(tasks, limit) {
  return new Promise(resolve => {
    const results = [];
    let running = 0;
    let index = 0;

    function next() {
      if (index === tasks.length && running === 0) {
        resolve(results); // 所有任务执行完了
        return;
      }

      while (running < limit && index < tasks.length) {
        const currentIndex = index;
        const task = tasks[currentIndex];
        index++;
        running++;

        task()
          .then(res => {
            results[currentIndex] = res;
          })
          .catch(err => {
            results[currentIndex] = err;
          })
          .finally(() => {
            running--;
            next(); // 开启下一个任务
          });
      }
    }

    next(); // 启动
  });
}

// const createTask = (id, delay) => () => {
//   return new Promise(resolve => {
//     console.log("开始任务", id);
//     setTimeout(() => {
//       console.log("完成任务", id);
//       resolve(`结果 ${id}`);
//     }, delay);
//   });
// };

// const tasks = [createTask(1, 1000), createTask(2, 800), createTask(3, 1200), createTask(4, 500), createTask(5, 700)];

// limitConcurrency(tasks, 2).then(res => {
//   console.log("全部完成:", res);
// });

//带最大重试 + 并发限制的任务队列 RetryQueue
// class RetryQueue {
//   constructor(limit = 3, maxRetry = 2) {
//     this.limit = limit;
//     this.maxRetry = maxRetry;
//     this.queue = [];
//     this.running = 0;
//   }

//   add(taskFn) {
//     return new Promise((resolve, reject) => {
//       const runner = async (retriesLeft = this.maxRetry) => {
//         this.running++;
//         try {
//           const result = await taskFn();
//           resolve(result);
//         } catch (e) {
//           if (retriesLeft > 0) {
//             // 重试
//             this.queue.unshift(() => runner(retriesLeft - 1));
//           } else {
//             reject(e);
//           }
//         } finally {
//           this.running--;
//           this._next();
//         }
//       };

//       if (this.running < this.limit) {
//         runner();
//       } else {
//         this.queue.push(() => runner());
//       }
//     });
//   }

//   _next() {
//     if (this.queue.length > 0 && this.running < this.limit) {
//       const next = this.queue.shift();
//       next();
//     }
//   }
// }

// const rq = new RetryQueue(2, 3);

// function createTask(id, failTimes = 2) {
//   let attempt = 0;
//   return () =>
//     new Promise((res, rej) => {
//       attempt++;
//       console.log(`任务${id} 第${attempt}次尝试`);
//       setTimeout(() => {
//         if (attempt <= failTimes) {
//           rej(`任务${id} 失败`);
//         } else {
//           res(`任务${id} 成功`);
//         }
//       }, 500);
//     });
// }

// rq.add(createTask(1));
// rq.add(createTask(2, 0));
// rq.add(createTask(3, 1));
