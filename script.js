
document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent form submission

        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        try {
            // Create a TextEncoder to convert string to Uint8Array
            const encoder = new TextEncoder();

            // Hash username and password using SHA-256
            const usernameHashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(usernameInput));
            const passwordHashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(passwordInput));

            // Convert hash buffers to hexadecimal strings
            const usernameHashHex = Array.from(new Uint8Array(usernameHashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
            const passwordHashHex = Array.from(new Uint8Array(passwordHashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');

            // Simulate sending hashed credentials to server for authentication
            const encryptedData = {
                username: usernameHashHex,
                password: passwordHashHex
            };

            // Redirect after successful login (replace 'index2.html' with your desired destination)
            window.location.href = 'index2.html';
        } catch (error) {
            console.error('Hashing error:', error);
        }
    });
});




