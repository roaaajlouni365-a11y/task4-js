function  validateForm() {
    let username = document.getElementById("username").value;
    let password =document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let order =document.getElementById("order").value;

    let usernameRegex = /^\S+$/;
    let passwordRegex = /^(?=.*\d).{8,}$/;
    let phoneRegex = /^07\d{8}$/;

   if (!usernameRegex.test(username)) {
    alert("Invalid Username");
    return;
} if (!passwordRegex.test(password)) {
    alert("Invalid Password");
    return;
} if (!phoneRegex.test(phone)) {
    alert("Invalid Phone Number");
    return;
}

localStorage.setItem("order", order);
sessionStorage.setItem("username", username);
let savedOrder = localStorage.getItem("order");
let savedUsername =  sessionStorage.getItem("username");
document.getElementById("welcome").innerHTML ="Welcome, " + username;
document.getElementById("savedOrder").innerHTML = "Saved Order: " + savedOrder;
document.getElementById("savedUsername").innerHTML ="Saved Username: " + savedUsername;
}