// ArrowFunction.js

// 화살표 함수 : ES6 버전부터 사용되는 함수를 선언하는 새로운 방식
// ES5 버전의 익명함수를 사용하여 생성하는 방식에서 변경되어 function 키워드를 생략하고, 매개변수와 코드블럭 사이에
// '=>' 기호를  사용하는 방식
// 소스코드가 반환값 한 줄의 경우 코드 블럭을 생략할 수 있음
// 매개변수가 1개인 경우, 매개변수의 괄호를 생략할 수 있음

// 사용법 :
// 1. 변수명 = (매개변수1, 매개변수2, ...) => {
// 실행할 소스코드
// return 반환값
// }

// 2. 변수명 = (매개변수1, 매개변수2, ...) => 반환값; (return 키워드도 생략)
// 3. 변수명 = 매개변수 => 반환값;
// 4. 변수명 = () => 반환값;

// 기존 함수 선언 방식
function es5Func1(a,b){
    console.log(a+b);
    return a + b;
}

// 기존 함수 선언 방식2 (익명함수) << ㅡ 콜백함수로 많이 사용함
var es5Func2 = function (a,b){
    console.log(a - b);
    return a - b;
}

es5Func1(10,20);
es5Func2(200,100);

let data = es5Func1(10,20);
console.log(data);
data = es5Func2(20,10);
console.log(data);

console.log('\n\n--------- es6 방식 -----------')

// 화살표 함수 선언
const es6Func1 = (a,b) => {
    console.log(a + b);
    return a + b;
}

data = es6Func1(10,20);
console.log(`리턴 받은 값 : ${data}`);

const es6Func2 = (a,b) => a + b;
data = es6Func2(10,100);
console.log(`리턴받은 값 : ${data}`);


const es6Func3 = (a,b) => console.log(a + b);
es6Func3(10,20);

const es6Func4 = (a) => a * 2 ;
data = es6Func4(10);
console.log(`리턴받은 값 : ${data}`);

const es6Func5 = a => a * 2 ;
data = es6Func5(10);
console.log(`리턴받은 값 : ${data}`);

const es6Func6 = () => console.log('es6Func6() 실행 ');
es6Func6();