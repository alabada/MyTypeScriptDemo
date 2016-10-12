function identity<T> (arg: T): T {
    return arg;
}

console.log('传入了数字:' + identity(11));

console.log('传入了字符串:' + identity('字符串'));