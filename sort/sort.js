//快速排序
var a =[2,1,3,9,4,5];
function QuickSort(a){
    QSort(a,0,a.length-1);
    console.log(a);
}
function QSort(a,low,high){
    var pivot;
    if(low < high){
        pivot = Partition(a, low, high);
        QSort(a, low, pivot-1);
        QSort(a, pivot+1, high);
    }
}
function Partition(a, low, high){
    var pivotkey;
    pivotkey = a[low];
    while(low < high){
        while(low<high && a[high]>=pivotkey){
            high--;
        }
        swap(a,low,high);
        while(low<high && a[low]<=pivotkey){
            low++;
        }
        swap(a,low,high);
    }
    return low;
}
function swap(a,i,j){
    var temp=a[i];
    a[i]=a[j];
    a[j]=temp;
}
QuickSort(a);

// 快速排序优化
function Partition1(a,low,high){
    var pivotkey;
    //三数取中
    var m=low+(high-low)/2;
    if(a[low]>a[high]){
        swap(a,low,high);
    }
    if(a[m]>a[high]){
        swap(a,high,m);
    }
    if(a[m]>a[low]){
        swap(a,m,low);
    }

    pivotkey=a[low];
    a[0] = pivotkey;//将轴点备份 //a应为线性表，low = 1,high = a.length
    while(low < high){
        while(low<high && a[high]>=pivotkey){
            high--;
        }
        a[low]=a[high];//采用替换而不是交换的方式进行操作
        while(low<high && a[low]<=pivotkey){
            low++;
        }
        a[high]=a[low];
        a[low] = a[0];
        return low;
    }
    return low;
}
// 希尔排序
function  ShellSort(a){
    var i,j;
    var increment = a.length;
    do{
        increment=increment/3+1;
        for(i=increment+1;i<a.length;i++){
            if(a[i]<a[i-increment])
            {
                a[0]=a[i];
                for(j=i-increment;j>0 && a[0]<a[j];j-=increment){
                    a[j+increment]=a[0];
                }
                a[j+increment]=a[0];
            }
        }
    }
    while(increment>1);
}

 // 起泡排序
function bubbleSort1(){
    var array = [4, 3, 2, 1, 0, 9];
    console.log("排序前:"+array);
    for(var i = 0; i < array.length - 1; i++){ // 比较n-1趟；每趟依次选出相应位置（从后往前）上的正确元素
        for(var j=0; j < array.length - 1 - i; j++){ // 每一趟比较n -1 -i次（后i个位置已经就位，所以需要比较的位置为n-1-i）；每次交换相邻逆序元素位置
            if(array[j] > array[j+1]) {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    };
    console.log("排序后:"+array);
}
// 冒泡排序优化
function bubbleSort2(){
    var array = [4, 3, 2, 0, 1, 9];
    console.log("排序前:"+array);
    var n= array.length;
    var sorted = false; // 整体排序算法，首先假定尚未排序
    while (!sorted){
        sorted = true; // 假定已经排序
        for(var i = 1; i<n; i++){ // 自左向右逐对检查当前范围[0,n)内的各相邻元素
            if(array[i-1]>array[i]){ // 一旦array[i-1]与array[i]逆序，就
                var temp = array[i]; // 交换
                array[i] = array[i-1];
                array[i-1] = temp;
                sorted = false; // 因整体排序不能保证，需要清除排序标志
            }
        }
        n--; // 至此末元素必然就位，故可以缩短待排序序列的有效长度
    }
    console.log("排序后:"+array);
}//借助布尔型标志位sorted，可及时提前退出，而不必费蛮力地做n-1趟扫描交换
