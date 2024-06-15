function kt(){
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.getElementById("email_field").value;
    const password = document.getElementById("password_field").value;
    const retypePass = document.getElementById("password_field-retype").value;
    const name = document.getElementById("fullname_field").value;
    const user = document.getElementById("username_field").value;
    if(email == "" || password == "" || retypePass == "" || name == "" || user == ""){
        document.getElementById("hidden-title-email").style = "display: block; font-size: 12px; color: red; margin: 0;";
        document.getElementById("hidden-title-email").innerText = "Vui lòng nhập email";
        document.getElementById("hidden-title-password").style = "display: block; font-size: 12px; color: red; margin: 0;";
        document.getElementById("hidden-title-password").innerText = "Vui lòng nhập password";
    }
    else if(!emailPattern.test(email)){
        document.getElementById("hidden-title-email").style = "display: block; font-size: 12px; color: red; margin: 0;";
        document.getElementById("hidden-title-email").innerText = "Email không hợp lệ";
    }
    else if(password!= retypePass){
        document.getElementById("hidden-title-password-retype").style = "display: block; font-size: 12px; color: red; margin: 0;";
        document.getElementById("hidden-title-password-retype").innerText = "Mật khẩu không trùng khớp";
    }   
    else{
        if(password.length < 8){
            document.getElementById("hidden-title-password").style = "display: block; font-size: 12px; color: red; margin: 0;";
            document.getElementById("hidden-title-password").innerText = "Mật khẩu phải có ít nhất 8 kí tự";
        }else{
            alert("Đăng ký thành công");
            window.location.href = "login.html";
        }
    }
}