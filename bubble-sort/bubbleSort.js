
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
function bubbleSort2(){ // 起泡排序算法
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
window.onload = bubbleSort2;
