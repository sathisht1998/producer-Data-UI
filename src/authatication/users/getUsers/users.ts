async function getAllUsers() {
    try {
        const response = await fetch('http://localhost:8765/users', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
                //referrerPolicy: 'origin-when-cross-origin',

            headers: {
                'Content-Type': 'application/json',
            },
            

        });

        if (response.ok) {
            const users = await response.json();
            console.log('All users:', users);

            const usersDataElement = document.getElementById('users-data');
            usersDataElement.textContent = JSON.stringify(users, null, 2);            
        } else {
            console.error('Error fetching users:', response.statusText);
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

// Call getAllUsers function when the button is clicked
const getAllUsersButton = document.getElementById('get-all-users-button');
if (getAllUsersButton) {
    getAllUsersButton.addEventListener('click', getAllUsers);
}
