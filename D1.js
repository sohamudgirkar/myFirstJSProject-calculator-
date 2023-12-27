// let a="anjum";
// function outerfunction(){
//     let b="good";
//     function inneerfunction(){
//         let c="girl";
//         console.log(a+b+c);
//     }
//     inneerfunction();
//     console.log(c);
//     console.log(b);
// }
// outerfunction();


// let num1=3;
// let num2=2;
// function add(a,b){
//     let sum=a+b;
//     console.log("sum is",sum);
// }
// add(num1,num2);
// function mul(c,d){
//     let mul=d*c;
//     console.log("multiplication is",mul);
// }
// mul(num1,num2);



let a="sarthak";
function outerfunction(){
    let b="good";
    function inneerfunction(){
        let c="boy";
        console.log(a+b+c);
    }
    return inneerfunction;
}
let result=outerfunction();
result();


 
