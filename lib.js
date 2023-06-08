let add = function(n1,n2){
    console.log(n1+n2);
};
let subtraction = function(n1,n2){
    console.log(n1-n2);
};
let multiply = function(n1,n2){
    console.log(n1*n2);
};
let math={
    add:add,subtraction:subtraction,multiply:multiply
};
//預設的輸出 要使用所有的功能
export default math;
//非預設的輸出 只要加法計算
export {add,subtraction};