document.addEventListener('DOMContentLoaded', function () {
    var updateButton = document.getElementById('update-profile-button');
    updateButton.addEventListener('click', function () {
        // Redirect to the user profile page
        window.location.href = './updateuser/updateuser.html';
    });
});
