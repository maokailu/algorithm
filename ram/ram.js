// 功能：向下取整的除法 c/d
// [c/d] = max{x | dx <= c}
//     = max{x | dx < 1 + c }
// 算法：反复地从R[0] = 1 + c 中减去R[1]=d
// 统计在下溢之前，所做减法的次数
function floor(){
    var R =[7, 2, 0, 1];
    R[0] = R[0] + R[3]; //c++
    
    while(R[0] > 0){
        R[0] = R[0] - R[1]; //c-=d
        R[2] = R[2] + R[3]; //x++
    }
    
    R[0] = R[2] - R[3] //else x-- and
    console.log(R[0]); // return R[0] = x =[c/d]
}
window.onload = floor;
