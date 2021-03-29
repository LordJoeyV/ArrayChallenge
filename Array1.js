function highPass(result, cutoff) {
    var filteredArr = [];
    var cutoff = 5
    for (var i = 0; i <result.length; i++){
        if (result[i] > cutoff) {
         filteredArr.push(result[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]