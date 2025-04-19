function listToTree(list) {
    const map = {};
    // 1. 先存储引用
    list.forEach(item => {
        map[item.id] = { ...item, children: [] };
    });

    list.forEach(item => {
        const node = map[item.id];
        if (node.parentId !== null) {
            map[node.parentId].children.push(node);
        }
    });
    return Object.values(map);
}
const list = [
    { id: 1, name: "根", parentId: null },
    { id: 2, name: "子1", parentId: 1 },
    { id: 3, name: "子2", parentId: 1 },
    { id: 4, name: "孙1", parentId: 2 },
];
const res = listToTree(list);
console.log(res, "res");
