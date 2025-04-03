function Submit() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    let loginBtn = document.getElementById("button");

    let verUsername = "user";
    let verPassword = "password";

    if(username == verUsername && password == verPassword){
        window.location.href = "home.html";
    }else{
        message.textContent = "Invalid username or password. Please wait 10 seconds to attempt again";
        localStorage.setItem("cooldown", Date.now() + 10000);
        loginBtn.disabled = true;
        setTimeout(() => {
            loginBtn.disabled = false;
            message.textContent = "";
        }, 10000);
    }
}


