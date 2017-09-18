//有序向量
//唯一化
var v = [1,1,1,1,2,2,2,3,3,4,4,4];
console.log('有序数组v：' + v);
function uniquify(){
    var i =0,j=0;
    while (++j<v.length){
        if(v[i]!=v[j]){
            v[++i]=v[j];
        }
    }
    v.length = i++;//直接截取尾部多余元素
    return j-i;//向量规模变化量，即被删除元素总数
}
console.log('有序数组v唯一化：' + uniquify());
var x=1;
// 二分查找
function search(y){
    x=2;
}
console.log(x);
search(x);
console.log(x);