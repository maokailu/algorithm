//分而治之 数组求和 二分递归
var a = [1,2,3,4,9,0];
var lo = 0;
var hi =a.length-1;
function sum(a,lo,hi){
    if(lo === hi){
        return a[lo];
    }else{
        var mi = parseInt((lo+hi)/2);
        return sum(a,lo,mi) + sum(a,mi+1,hi);
    }
}
console.log(sum(a,lo,hi));