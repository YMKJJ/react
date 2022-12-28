// 전개 연산자 ( ... )

// 나열형 자료를 추출하거나 연결할 때 사용
// 배열, 객체, 변수명 앞에 ... 기호를 사용하여 사용
// 배열 객체 함수 인자 표현식 ( [ ] ) 안에서만 동작함

console.log('------- ES5 --------');

var array1 = ['one','two'];
var array2 = ['three','four'];

var combined = [array1[0], array1[1], array2[1], array2[1]];
// 배열의 각 요소를 하나씩 추출하여 새로운 배열에 대임
console.log(combined);

var combined = array1.concat(array2);
console.log(combined);

var combined = [].concat(array1,array2);
console.log(combined);

var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty' // 기본값 설정 앞에 index가 빈값일때 or 뒤에 값이 들어감
console.log(first);
console.log(second);
console.log(three);


console.log('---------------ES6 \n\n\n--------------------');

var array1 = ['one','two'];
var array2 = ['three','four'];

var combined = [...array1,...array2];
console.log(combined);

// 왼쪽이 변수명
var[first,second,three = 'empty', ...others] = array1;
console.log(first);
console.log(second);
console.log(three);
console.log(others);

// second가 가지고 있는 데이터를 first에 담아두고 first에 있는 데이터를 second에 담아둠 (데이터 스왑)
var [first, second] = [second, first];

// 기존방식
var first = 10;
var second = 20
var tmp = 0;

tmp = first
first = second;
second = tmp;

// 잘못 사용한 예
// var wrongArr = ...array1; < ㅡㅡ 대괄호 안에서 사용하지 않아 오류