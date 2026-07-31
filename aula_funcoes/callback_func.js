function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback){
  setTimeout(function() {
    console.log('f1');
    if (callback) {
      callback();
    }
  }, rand());
}

function f2(callback){
  setTimeout(function() {
    console.log('f2');
    if (callback) {
      callback();
    }
  }, rand());
}

function f3(callback){
  setTimeout(function() {
    console.log('f3');
    if (callback) {
      callback();
    }
  }, rand());
}
// aqui é um modo mais "rustico" chamando o callback
// f1(function(){
//   f2(function(){
//     f3(function () {
//       console.log('Hello World');
//     })
//   })
// })

//aqui vai ser um modo mais elegante e individual
f1(f1callback);

function f1callback(){
  f2(f2callback);
}
function f2callback(){
  f3(f3allback);
}
function f3allback(){
  console.log("Hello World!");
}
