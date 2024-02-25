document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', function () {
            window.location.href = 'src/authatication/login/login.html';
        });
    }
});
