function getQueryParams(url) {
    const params = {};
    const queryString = url.split("?")[1];
    const paramPairs = queryString.split("&");
    for (const str of paramPairs) {
        const [key, value] = str.split("=");
        params[key] = decodeURIComponent(value) || "-";
    }
    return params;
}

// 测试 URL
const url = "https://example.com?name=%E4%BD%A0%E5%A5%BD&age=25&city=New+York";
console.log(getQueryParams(url));
