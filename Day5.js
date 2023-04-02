// call back fun.
function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation() {
    doStep1(0, (result1) => {
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
        //   console.log(`result: ${result3}`);
        document.getElementById('Day5').innerHTML=result3;
        });
      });
    });
  }
  
  doOperation();

//   promise function

// let promise = new Promise(function(resolve, reject) {
//     let x=9;
//     if(x==0){
//     // resolve will display is the condition is true
//     setTimeout(function() {
//     resolve('Success!');
//     }, 1000);
// }
// else{
//     reject('error');
// }
//    });
//    promise.then(function(value) {
//     document.getElementById('para').innerHTML=value;
//    }).catch(function(error) {
//     document.getElementById('para').innerHTML=error;
//    });

// //    calling the api using promise function
// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");
// let person = document.querySelector('#name');
// const delay = document.querySelector('#delay');
// const button = document.querySelector('#set-alarm');
// const output = document.querySelector('#output');

// function alarm(man, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//      reject('Alarm delay must not be negative');
//     }
//     setTimeout(() => {
//       resolve(`Wake up, ${man}!`);
//     }, delay);
//   });
// }

// button.addEventListener('click', () => {
//   alarm(person.value, delay.value)
//     .then((message) => output.innerHTML = message)
//     .catch((error) => output.innerHTML = `Couldn't set alarm: ${error}`);
// });

