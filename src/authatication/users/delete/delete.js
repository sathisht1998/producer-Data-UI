document.addEventListener('DOMContentLoaded', function () {
    var deleteButton = document.getElementById('delete-button');
    deleteButton.addEventListener('click', function () {
        window.location.href = './delete/delete.html'; // Redirect to delete.html page
    });
});
