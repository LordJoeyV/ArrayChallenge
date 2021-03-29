function betterThanAverage(result) {
    var sum = 0;
    for (var i = 0; i < result.length; i++){
    sum= result[i]+sum
    var avg=sum / (i+1)
    }
    // calculate the average
    var count = 0 
    for (var i = 0;i<result.length; i++){ 
      if (result[i]>avg)
      count=count+1
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result) 
