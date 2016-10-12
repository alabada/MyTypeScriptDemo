
class TestClass {
    test: string;

    constructor(s: string) {
        this.test = s;
    }

    print() {
        console.log(this.test);
    }
}

let t = new TestClass("哈喽");
t.print();