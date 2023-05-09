function register() {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password1 = document.getElementById('password1').value;
    let user = {
        username: username,
        email: email,
        password: password,
        password1: password1
    }
    let json = JSON.stringify(user);
    localStorage.setItem(username, json)
    window.location.href = "login.html"
        alert("Bạn đã đăng kí thành công")
}
function login() {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let user = localStorage.getItem(username);
    let data = JSON.parse(user);
    if (username === '' && email === '' && password === '') {
        alert("Vui lòng nhập tên người dùng và mật khẩu")
    }
    else if (username === data.username && email === data.email && password === data.password) {
        alert("Đăng nhập thành công!Chào mừng bạn!")
        window.location.href = "trangchu.html"
    }
    else {
        alert("Sai mật khẩu hoặc tên người dùng!")
    }
}

