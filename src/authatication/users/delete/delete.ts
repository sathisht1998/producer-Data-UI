document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.getElementById('delete-button');

    deleteButton.addEventListener('click', () => {
        window.location.href = './delete/delete.html'; // Redirect to delete.html page
    });
});