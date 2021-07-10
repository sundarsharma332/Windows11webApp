
function validateForm() {
    const pw = document.loginform.usr.value;
    const password = "sundar";
    if (pw == password) {
        console.log("redirecting to Main page ...................")
        window.open("Main.html");
    }
    else {
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }
}


        
validateForm();
