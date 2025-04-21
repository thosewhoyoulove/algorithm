// 防抖,就是每次触发，都清除上一次的定时器，重新设置定时器

function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

let fn = debounce((a, b) => {
  console.log(a, b);
}, 1000);

// fn(1, 2);
// fn(1, 2);
// fn(1, 2);
// fn(1, 2);
// fn(1, 2);
// fn(1, 2);
// fn(1, 2);

// 节流，就是每隔一段时间执行一次，如果时间到了，就执行，如果时间没到，就不执行
function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    let now = new Date();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}
