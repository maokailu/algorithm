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
var a=[1,2,3,4];
var e=2;
var lo=0;
var hi=a.length;
function binSearch(a,e,lo,hi){
    while(lo < hi){//每步迭代可能要做两次比较判断，有三个分支
        var mi = parseInt((lo + hi)/2);//以中点为轴点
        if(e < a[mi]){
            hi = mi;//深入前半段[lo,mi)继续查找
        }else if(e > a[mi]){
            lo = mi+1;//深入后半段（mi,hi)
        }else{
            return mi;//在mi处命中
        }
    }
    return -1;//查找失败
}
console.log('有序向量二分查找结果:'+binSearch(a,e,lo,hi));