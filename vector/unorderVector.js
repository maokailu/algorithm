
//无序向量
// 插入
var a=[4,3,1,5];
console.log('无序数组a：' + a);
var e = 2;//e作为秩为r元素插入
var r = 3;
function insert(){
    for(var i= a.length; i > r; i--){ //自后向前
        a[i]=a[i-1];//后继元素顺次后移一个单元
    }
    a[i]=e;//置入新元素，更新容量
}
insert();
console.log('无序数组a插入新元素：'+a);
//区间删除
var a=[5,3,8,9,5,6];
console.log('无序数组a：'+a);
function remove(a,lo,hi){
    if(lo === hi) return 0;//出于效率考虑，单独处理退化情况
    while(hi<a.length){
        a[lo++]=a[hi++];//[hi,size)往后的元素顺次前移hi-lo位
    }
    a.length = a.length - (hi-lo);//更新规模，若有必要则缩容
    return hi-lo;// 返回被删除的元素数目
}
console.log('无序数组a删除区间[2,4)中的'+remove(a,2,4)+'个元素：'+a);
// 查找
var a=[1,3,2,3,4,4,5];
var e=4;
function  find(a,lo,hi,e){
    while((lo<hi--)&&(e!==a[hi]));//逆向查找
    return hi;//hi<lo意味着失败，否则hi即命中元素的秩
}
console.log('无序数组'+a+'中查找'+e+'元素的秩为：' + find(a,0,a.length,e));
//唯一化
console.log('无序数组：'+a);
function deduplicate(a){
    var oldSize = a.length;
    var i =1;//从a[1]开始
    while (i<a.length){
        (find(a,0,i,a[i])<0) ? i++ : remove(a,i,i+1);//在前缀中寻找雷同者
    }
    return oldSize - a.length;
}
deduplicate(a);
console.log('无序数组唯一化：'+a);