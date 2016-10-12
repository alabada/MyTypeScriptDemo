function buildName (x: string, y?: string) { // 可选参数案例 若不传值，则y为undefined
    return x + " " + y;
}

function buildName1 (x: string, y="默认参数") { // 默认参数案例 若不传值，则y为该默认值
    return x + " " + y;
}

let result = buildName("可选参数");
console.log(result);

let result1 = buildName1("省略了默认参数");
console.log(result1);