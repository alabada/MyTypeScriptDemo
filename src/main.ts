/**
 * Created by zhida.wen on 2016/9/29.
 */

class Greeter {
    static standarGreeting = "hello, there";
    greeting: string;

    greet() {
        if (this.greeting) {
            return "hello " + this.greeting;
        } else {
            return Greeter.standarGreeting;
        }
    }
}

let greet1: Greeter;
greet1 = new Greeter();
console.log(greet1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standarGreeting = "Hey there";

let greeter2:Greeter = new Greeter();
console.log(greeter2.greet());