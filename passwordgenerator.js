let passty=null;
let length=11;
let password="";
const passType=(z)=>{
    passty=z;
}
const copyText=()=>{
    
}
const genPassword=()=>{
    let alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(passty==`number`){
        password="";
    for(i=1;i<12;i++){
        password+=(Math.floor(Math.random()*10));
    }
    
    }
    else if(passty==`character`){
        password="";
        for(i=1;i<12;i++){
        let str=(Math.floor(Math.random()*52));
        password+=(alpha.charAt(str));}
    }
    document.getElementById("display").value=password;
}
