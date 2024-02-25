document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('register-button');
    registerButton.addEventListener('click', function() {
        // Redirect to the registration page
        window.location.href = './src/register/registration.html';
    });
});