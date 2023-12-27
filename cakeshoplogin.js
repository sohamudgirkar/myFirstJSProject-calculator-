const validationpassword=()=>{
    let q =document.getElementById("password").value ;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
     if (passwordRegex.test(q)){
        console.log("Password is valid!");} 
    else {
        alert("Password is invalid.");
        //Please make sure it has at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.
    }

    let w =document.getElementById("username").value ;
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
     if (usernameRegex.test(w)) {
        console.log("Username is valid!");
    } else {
    alert("Username is invalid.");
    // Please make sure it contains only letters, numbers, and underscores, and is between 3 to 16 characters long.
    }
    if(((usernameRegex.test(w))&&(passwordRegex.test(q)))==true){
    window.location.href="./main.html";}
}
    
