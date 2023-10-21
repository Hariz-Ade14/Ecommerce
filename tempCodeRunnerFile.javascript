// // 'use strict'
// // let x =  10; // Global Scope
// // const Sum = () => {
// //     console.log(x);
// // }

// // Sum();

// // //Local Scope or Function Scope
// // const Add = () => {
// //     let y = 4;
// //     console.log(y);
// // }

// // Add();

// // const Sub = () => {
// //     const w = 10;
// //     if(w < 20){
// //         var V = 20;
// //         console.log("less than 20");
     
        
// //     }
// //     function SUB() {
// //          console.log(V - w);
// //     }

// //     SUB();
// //     console.log(w - V);

  
// // }
// // Sub();



// calcAge(2003);

// // calcAge(2003);
// function calcAge(birthYEar) {
//      let age = 2023 - birthYEar;
//      let firstName = "Hariz";
//      console.log(`${firstName} is ${age}`);
// }

// const Sex = "MALE";

// function sex() {
//     if(Sex === "MALE"){
//         var job = "Driver";
//         console.log(`I am a ${Sex} ${job}`);
        
//     }
// }
// sex();

(function myIFFE(){
    num++;
    console.log(num);
    return num !== 4 ? myIFFE(num) : console.log("finished");
})(num = 0);