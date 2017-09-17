//从数组中找出最大的两个整数 使得元素比较的次数，要求尽可能的少
var a =[1,2,3,4];
var lo = 0,
    hi = a.length,
    x1,
    x2;
function max2(a,lo,hi){
    var i,j,q;
    for(x1= lo,i=lo+1;i<hi;i++){
        if(a[x1]<a[i]) x1= i;
    }
    for(x2=lo,j=lo+1;j<x1;j++){
        if(a[x2]<a[j]) x2=j;
    }
    for(q=x1+1;q<hi;q++){
        if(a[x2]<a[q]) x2=q;
    }
}
max2(a,lo,hi);
console.log('a数组中最大的两个元素是' + a[x1]+ '和' + a[x2]);

// 递归+分治
// function max2(a,lo,hi){
//     if(lo+2===hi){
//         // todo  
//         return;
//     }
//     if(lo+3===hi){
//         // todo  
//         return;
//     }
//     var mi=parseInt((lo+hi)/2);//devide
//     x1L = lo,x2L=lo;max2(a,lo,mi);
//     x1R = mi+1,x2R=mi+1;max2(a,mi,hi);
//     if(a[x1L]>a[x1R]){
//         x1=x1L;x2=(a[x2L]>a[x1R])?x2L:x1R;
//     }else{
//         x1=x1R;x2=(a[x1L]>a[x2R])?x1L:x2R;
//     }
// }
// max2(a,lo,hi);
// console.log('a数组中最大的两个元素是' + a[x1]+ '和' + a[x2]);