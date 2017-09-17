// 利用栈结构实现进制转换
var n = 100;// 需要转换的数
var base = 10;// 进制数
var digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];// 新进制下的数位符号，可视base的取值范围适当扩充
var stack = [];
function convert() {
    while (n > 0){
        stack.push(digit[n % base]);
        n = Math.floor(n/base);//n更新为其对base的除商
    }
    console.log(stack);
}
window.onload = convert; 