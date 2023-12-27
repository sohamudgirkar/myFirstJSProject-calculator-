let arr1=[];
let arr2=[];

// const addToCart=(pro)=>{
// let p=document.getElementById(`product${pro}`).innerHTML;
// let q=document.getElementById(`cost${pro}`).innerHTML;
// arr1.push({item:p,cost:q});
// }
const buyNow=(pro1,print)=>{
    let z=document.getElementById(`product${pro1}`).innerHTML;
    let x=document.getElementById(`cost${pro1}`).innerHTML;
    arr2.push({item:z,cost:x});
    print();
}

printbill=()=>{
    document.getElementById(`finalitem`).innerHTML=arr2[0].item;
    document.getElementById(`finalamount`).innerHTML=arr2[0].cost;
    let c=document.getElementById(`finalitem`).innerHTML;
    return c;

}