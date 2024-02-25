document.addEventListener('DOMContentLoaded', function () {
    var registerButton = document.getElementById('register-button');
    registerButton.addEventListener('click', function () {
        // Redirect to the registration page
        window.location.href = './src/authatication/register/registration.html';
    });
});
