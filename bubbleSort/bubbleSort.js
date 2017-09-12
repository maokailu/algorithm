
function bubbleSort(){
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
window.onload = bubbleSort;
