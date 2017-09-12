Array.prototype.distinct = function() {
    var ret = [];
    for (var i = 0; i < this.length; i++)
    {
        // 遍历数组中每个元素
        for (var j = i+1; j < this.length;) { 
            // 将当前i元素与其后的元素进行比较
            if (this[i] === this[j]) {
                // 删除j并返回被删除的元素数组
                ret.push(this.splice(j, 1)[0]);
            } else {
                j++;
            }
        }
    }
    return ret;
}
console.log(['a','b','c','d','b','a','e'].distinct());