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