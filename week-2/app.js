

function max(...numbers){
  var max;
  max = numbers[0]; // 先把第一個當最大值

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      // 若數字大於原本的 max，則將新的數字作為 max
      max = numbers[i];
    }
  }
  console.log(max);
}

max(1, 2, 4, 5);
max(5, 2, 7, 1, 6);
