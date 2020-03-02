var sumArray = function(arr){
  var sum = 0;
    arr.forEach((item, i) => {
      sum+=item
    });
  return sum;
}

module.exports = sumArray;
