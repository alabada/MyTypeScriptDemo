class Fanxing<T> {
    ss: T;

    print: (ss: T) => T;
}

let oo = new Fanxing<number>();
oo.ss = 0;
console.log(oo.ss);

let ooo = new Fanxing<string>();
ooo.ss = "字符串";
console.log(ooo.ss);
