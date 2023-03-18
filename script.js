// // Day1...
// function change(){
//     document.getElementById('para').innerHTML="inner HTML Over write the content written in<p."
//     // decalring variable x to indicate para
//     let x=document.getElementById('para'); 
//     x.style.color='red';
// }
// document.write(5 + 6);
// // window.alert('Hello world');
// // information will shown in console of browser;
// console.log('Hello World');

// // Day2
// document.getElementById("para").innerHTML ="This example changes the content (the innerHTML) of the <p> element with id para" ;


// function upperCase() {
//   const x = document.getElementById("fname");
//   x.value = x.value.toUpperCase();
// }
// function mOver() {
//     let y=document.getElementById('mouse');
//     y.innerHTML="mouse is over div";
// }

// function mOut() {
//     let a=document.getElementById('mouse');
//     a.innerHTML="mouse is out of div";
// }
// // Event listener
// document.getElementById("myBtn").addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// }

// document.getElementById('butn').addEventListener('click',date);
// function date(){
//     document.getElementById('para1').innerHTML=Date();
// }

// Day3..
 //  Example of sunchronous Javacript...
        //Hello!, Hi, How are you? will display one by one in console.

        // const second=()=>{
        //     console.log("Hello!")
        // }
        // const first=()=>{
        //     console.log("Hi")
        //     second();
        //     console.log("How are you?")
        // }
        // first();

        // Example of asynchronous javascript using seTimout function....

        function getPost(){
            document.getElementById('first').innerHTML='First line';
            setTimeout(()=>{
                document.getElementById('second').innerHTML="Second line"; // Here Second line will display after 2 sec then displaying first and third line
            },2000)
            document.getElementById('third').innerHTML='Third line';
        }
        getPost();
        // Example of AJAX...
        //     const xhr = new XMLHttpRequest();
        //     xhr.open('GET', 'https://api.example.com/data');
        //     xhr.send();
        //     xhr.onreadystatechange = function () {
        //     if (xhr.readyState === XMLHttpRequest.DONE) {
        //         if (xhr.status === 200) {
        //             console.log(xhr.responseText);
        //         } else {
        //             console.log('Error!');
        //         }
        //     }
        // };

        // Callback function example...
        // function greet(name, callback) {
        //     // console.log(`Hello, ${name}!`);  
        //     document.getElementById("first").innerHTML=`Hello, ${name}!`
        //     callback();   //Here callback function is called
        // }
        // function sayGoodbye() {
        //     // console.log("Goodbye!");
        //     document.getElementById('second').innerHTML='GoodBye!'
        // }
        // greet("John", sayGoodbye);// Here sayGoodbye function is passed as callback in greet function
        