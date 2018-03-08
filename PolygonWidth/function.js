// var origin = [1,2,3,4];
// var changedArray = [...origin, 2, 3];

// changedArray.forEach(function(v, i, o) {
//     console.log(v);
// })

// var mapped = changedArray.map(function(v){ 
//     return v * 2; // changedArray의 원소를 돌면서, 값을 변경시킨 후 새로운 배열로 만들어서 리턴
// })

// console.log(changedArray);
// console.log(mapped);



// function isBigEnough(value) {
//     return value >= 10;
//   }
//   var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

//   console.log(filtered);
//   // filtered 는 [12, 130, 44]

//   var filtered = [12, 5, 8, 130, 44].filter(function isBigEnough(value){
//       return value >= 10;
//   });

//   console.log(filtered);


var total = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
  });

var total2 = [0, 1, 2, 3].reduce(elem => elem + 10)

console.log(total);
console.log(total2);