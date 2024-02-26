document.addEventListener('DOMContentLoaded', () => {
    const updateForm = document.getElementById('update-form');

    updateForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const userNameInput = document.getElementById('user-name') as HTMLInputElement;
        const newUsername = userNameInput.value.trim();

        if (!newUsername) {
            alert('Please enter a new username');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8765/users/${userId}`, {
                method: 'PUT', // Assuming your backend API endpoint uses PUT for updating
                credentials: 'include', // Include cookies in the request
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: newUsername })
            });

            if (response.ok) {
                alert('Username updated successfully');
                // Optionally, redirect to another page or perform any other action
            } else {
                const errorMessage = await response.text();
                alert(`Failed to update username: ${errorMessage}`);
                console.error('Failed to update username:', errorMessage);
                // Display error message or perform error handling
            }
        } catch (error) {
            alert('An error occurred');
            console.error('Error occurred:', error);
            // Display error message or perform error handling
        }
    });
});
