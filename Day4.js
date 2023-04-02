let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
    resolve('Success!');
    }, 1000);
   });
   promise.then(function(value) {
    // console.log(value); // Output: Success!
    document.getElementById('para').innerHTML=value;
   }).catch(function(error) {
    console.log(error);
   });

// function step1(data) {
//     return new Promise(function(resolve, reject) {
//     console.log("Step 1 with " + data + " is complete");
//     resolve("more data");
//     });
//    }
//    function step2(data) {
//     return new Promise(function(resolve, reject) {
//     console.log("Step 2 with " + data + " is complete");
//     resolve("even more data");
//     });
//    }
//    function step3(data) {
//     return new Promise(function(resolve, reject) {
//     console.log("Step 3 with " + data + " is complete");
//     resolve();
//     });
//    }

//    step1("data")
// //  .then(step2)
// //  .then(step3)
//  .then(function() {
// //  console.log("All 
// // steps are complete");
// document.getElementById('para').innerHTML="All steps are completed";
//  });

async function fetchData() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    let name=''
    data.forEach((username)=>{
        name=`Name:-${username.name}`;
    })
    para.innerHTML=name;
    } catch(error) {
    // console.error(error);
    para.innerHTML=error;
    }
}