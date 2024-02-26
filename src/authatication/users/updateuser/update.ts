document.addEventListener('DOMContentLoaded', () => {
    const updateButton = document.getElementById('update-profile-button');

    updateButton.addEventListener('click', () => {
        // Redirect to the user profile page
        window.location.href = './updateuser/updateuser.html';
    });
});