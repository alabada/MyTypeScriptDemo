
interface Label {
    greeting: string;
	size: number;
}

function printString (s: Label) {
	console.log(s.greeting);
}

let myObj = {size: 10, greeting: "hello"}

printString(myObj); // 如果没有size属性就会报错了
