import {name,job,gender,getInfo} from "./MyMod1.mjs";
import {num1,num2,sum} from "./MyMod2.mjs";
import sub from "./MyMod2.mjs";

console.log(name);
console.log(job);
console.log(gender);
console.log(getInfo());
console.log(`첫 번째 숫자 ${num1} + 두 번째 숫자 ${num2} = ${sum()}`);

console.log(`sub 실행 : ${sub()}`);
