//有序向量唯一化
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
//删除区间[lo,hi)
var m=[5,3,8,9,5,6];
console.log('无序数组m：'+m);
function remove(lo,hi){
    if(lo === hi) return 0;//出于效率考虑，单独处理退化情况
    while(hi<m.length){
        m[lo++]=m[hi++];//[hi,size)往后的元素顺次前移hi-lo位
    }
    m.length = m.length - (hi-lo);//更新规模，若有必要则缩容
    return hi-lo;// 返回被删除的元素数目
}
console.log('无序数组m删除区间[2,4)中的'+remove(2,4)+'个元素：'+m);