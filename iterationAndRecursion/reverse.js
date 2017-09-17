// 减而治之 数组倒置
var a = [1,2,3,7,3];
var lo =0,hi=a.length-1;
function reverse(a, lo, hi) {
    if(lo<hi){
        var temp = a[hi];
        a[hi] = a[lo];
        a[lo] = temp;
        reverse(a, lo+1, hi-1);
    }else return;
}
window.onload = reverse(a, lo, hi);
console.log(a);