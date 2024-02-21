
class A {
    a(){}
    b = function () {} //  b: [Function: b]  Такая функция будет
    // иметь свой контекст выполнения (this), который будет зависеть от контекста, в котором она вызывается.
    c = () => {} //  c: [Function: c] }  будет иметь контекст выполнения класса A.
 }

 function B() {
     this.a = function (){} // a: [Function (anonymous)],
     this.b = function (){} // b: [Function (anonymous)],
     this.c = () => {} // c: [Function (anonymous)]
 }


 let a = new A()
 let b = new B()


console.log('a',a)
console.log('b',b)