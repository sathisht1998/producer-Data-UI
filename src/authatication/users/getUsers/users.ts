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
            //New object only email 

            const usersTableBody = document.getElementById('user-table-body');
            usersTableBody.innerHTML = ''; // Clear existing table rows
            
            users.forEach(user => {
                const row = `
                    <tr>
                        <td>${user._id}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>
                            <select onchange="handleAction(this)">
                                <option value="" disabled selected>Select action</option>
                                <option value="delete">Delete</option>
                                <option value="update">Update</option>
                            </select>
                        </td>
                    </tr>
                `;
                usersTableBody.insertAdjacentHTML('beforeend', row);
            });            
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
