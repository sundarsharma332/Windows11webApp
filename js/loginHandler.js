console.log("hello there i am working fine.");


function Validate() {
    const pw = document.getElementById("password");
    var password = "sundar";
    if ((pw == password)) {
        window.location = "Home.html";
        return false;
    }
    else {
        alert("Login was unsuccessful, please check your username and password");
    }
}


Validate();