//arrray destructuring
let a=[1,2,3,4,5];
// let [top1,top2,top3,top4,top5]=[1,2,3,4,5];
// console.log(top3);


let [top1,,,,top5]=a;
console.log(`my number is ${top1} and final number is ${top5}`);