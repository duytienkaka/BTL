function kt() {
    const email = document.getElementById("email_field").value;
    const password = document.getElementById("password_field").value;
    
    if(email == "" || password == ""){
        document.getElementById("hidden-title-email").style = "display: block; font-size: 12px; color: red; margin: 0;";
        document.getElementById("hidden-title-email").innerText = "Vui lòng nhập email";
        document.getElementById("hidden-title-password").style = "display: block; font-size: 12px; color: red; margin: 0;";
        document.getElementById("hidden-title-password").innerText = "Vui lòng nhập password";
    }
    else if(email == "admin@gmail.com" && password == "123"){
        alert("Đăng nhập thành công");
        window.location.href = "trangchu.html";
    } else {
        if(email == "admin@gmail.com" && password != "123"){
            document.getElementById("hidden-title-password").style = "display: block; font-size: 12px; color: red; margin: 0;";
            document.getElementById("hidden-title-password").innerText = "Password không chính xác";
        } else if(email != "admin@gmail.com" && password == "123"){
            document.getElementById("hidden-title-email").style = "display: block; font-size: 12px; color: red; margin: 0;";
            document.getElementById("hidden-title-email").innerText = "Email không chính xác";
        } else {
            document.getElementById("hidden-title-email").style = "display: block; font-size: 12px; color: red; margin: 0;";
            document.getElementById("hidden-title-email").innerText = "Email không chính xác";
            document.getElementById("hidden-title-password").style = "display: block; font-size: 12px; color: red; margin: 0;";
            document.getElementById("hidden-title-password").innerText = "Password không chính xác";
        }
        // Xóa những gì người dùng nhập
        document.getElementById("email_field").value = "";
        document.getElementById("password_field").value = "";
    }
}

var emailInput = document.getElementById('email_field');
var passwordInput = document.getElementById('password_field');

emailInput.addEventListener('click', function() {
    document.getElementById('hidden-title-email').style.display = 'none';
    document.getElementById('hidden-title-password').style.display = 'none';
});

passwordInput.addEventListener('click', function() {
    document.getElementById('hidden-title-email').style.display = 'none';
    document.getElementById('hidden-title-password').style.display = 'none';
});
