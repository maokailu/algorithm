var list = "(((()"
var paren = function () {
    var stack = [];
    for (var i = 0; i< list.length; i++){ // 逐一检查当前字符
        if( "(" === list[i]){ // 遇左括号，进栈
            stack.push(list[i]);
        }else if(stack.length){ // 遇右括号：若栈非空，则弹出左括号
            stack.pop(list[i]);
        }else { // 否则（遇右括号时栈已空），必不匹配
            return false;
        }
    }
    console.log(stack.length);
    return Boolean(stack.length);
}
window.onload = paren;
// 哇 真有意思