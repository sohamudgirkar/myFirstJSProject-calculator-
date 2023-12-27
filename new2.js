
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// //2.
// for(let i=0;i<=100;i++){
//     if(i%2==!0){
//         console.log(i);
//     }
// }

// //3.
// for(let i=1;i<=10;i++){
//     console.log(7*i);
// }

// //4.
// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         console.log(i*j);
//     }
// }

// //5.
// let sum=null;
// for(let i=1;i<=10;i++){
//      sum+=i; 
// }
// console.log(sum);

// //6.
// let a=1;
// for (let i=10;i>0;i--){
//     a*=(i);
// }
// console.log(a);

// //7.
// let sum=null;
// for(let i=11;i<=30;i++){
//     if(i%2==0){
//         sum+=i;
//     }
// }
// console.log(sum);

// //8.
// let a=prompt("enter your number");
// let f=(a*1.8)+32;
// console.log(f);

// //9.
// let a=prompt("enter your number");
// const convert1=(p)=>{
//     let f=(p*1.8)+32;
//     console.log(f);
// }
// convert1(a);

// //10.
// let arr=[1,2,3,4,5,6,8,7,9];
// let sum=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0);
// console.log(sum);

// //11.
// let arr=[1,2,3,4,5,6,8,7,9];
// let sum=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0);
// console.log(sum/arr.length);


// //12.
// let arr=[1,2,3,4,5,6,8,7,9,-3,-5,-55,-2];
// let newArr=arr.filter(function(currentElement){ 
//     return (currentElement>0);
// });
// console.log(newArr);


// //13.
// let arr=[1,2,3,4,5,6,8,7,9,-3,-5,-55,-2];
// const treverse=()=>{
//     for(let i=0;i<(arr.length-1);i++){
//         if(arr[i]>arr[i+1]){
//             let a=arr[i];
//             arr[i]=arr[i+1];
//             arr[i+1]=a;
//             treverse();
//         } 
//     }
// }
// treverse();
// console.log(arr[arr.length-1]);

// //14.
// let arr =[0,1];
//     for(let i=0;i<8;i++){
//         arr.push(arr[i]+arr[i+1]);
//     }
// console.log(arr);

// //15.
// let num=prompt("enter the number");
// let arr =[0,1];
//     for(let i=0;i<8;i++){
//         arr.push(arr[i]+arr[i+1]);
//     }
//    console.log(arr[num-1]); 

// //16.
// let num=prompt("enter the number");
// let a=true;
// const primeNum=()=>{
//     for(i=2;i<num;i++){
//         if(num%i==0){
//             a=false;
//         }
//     }
//     if(a==false){
//         console.log(`${num} is not prime number`);
//     }
//     else{
//         console.log(`${num} is prime number `);
//     }
// }
// primeNum();

//17.



// //18.
// for(j=1;j<101;j++){
//     let num=j;
// let a=true;
// const primeNum=()=>{
//     for(i=2;i<num;i++){
//         if(j%i==0){
//             a=false;
//         }
//     }
//     if(a==true){
//         console.log(`${num}`);
//     }
// }
// primeNum();
// }


//19.
//20.
//21.


//22.
let arr=[1,2,3,4,5,6,7,8,9];



