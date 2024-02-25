function registerUser(username: string, email: string, password: string) {
    
    fetch('http://localhost:8765/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to register user');
        }
        return response.text();
    })
    .then(data => {
        console.log(data); // Log success message from server
        // Optionally, redirect to another page or display a success message to the user
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error (e.g., display error message to the user)
    });
}


document.addEventListener('DOMContentLoaded', () => {
    console.log("addEventListener called +++++++++++++++++++++++++++  >>>>    "+ document.getElementById('register-button'))
    const registerButton = document.getElementById('nyTst');
    
    registerButton.addEventListener('click', () => {
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        registerUser(username, email, password);
    });
});
