document.addEventListener('DOMContentLoaded', (event) => {
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const updateProfileBtn = document.getElementById('update-profile-btn');
    const editOverlay = document.getElementById('edit-overlay');
    const profileName = document.querySelector('.profile-info h2');
    const profileBio = document.querySelector('.profile-info .bio');

    // Show the edit profile overlay with current name and bio
    editProfileBtn.addEventListener('click', () => {
        const currentName = profileName.textContent;
        const currentBio = profileBio.textContent;

        // Set input field values with escaped current values
        document.getElementById('edit-name').value = currentName;
        document.getElementById('edit-bio').value = currentBio;

        editOverlay.style.display = 'flex';
    });

    // Update profile information safely
    updateProfileBtn.addEventListener('click', () => {
        // Get sanitized input values
        const newName = document.getElementById('edit-name').value;
        const newBio = document.getElementById('edit-bio').value;

        // Update profile information
        profileName.textContent = newName;
        profileBio.textContent = newBio;

        editOverlay.style.display = 'none';
    });
});
