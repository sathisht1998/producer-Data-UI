function registerUser(username, email, password) {
    fetch('http://localhost:8765/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, email: email, password: password })
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error('Failed to register user');
        }
        return response.text();
    })
        .then(function (data) {
        console.log(data); // Log success message from server
        // Optionally, redirect to another page or display a success message to the user
    })
        .catch(function (error) {
        console.error('Error:', error);
        // Handle error (e.g., display error message to the user)
    });
}
document.addEventListener('DOMContentLoaded', function () {
    console.log("addEventListener called +++++++++++++++++++++++++++  >>>>    " + document.getElementById('register-button'));
    var registerButton = document.getElementById('nyTst');
    registerButton.addEventListener('click', function () {
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        registerUser(username, email, password);
    });
});
