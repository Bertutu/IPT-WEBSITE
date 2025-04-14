// Get modal and elements
const contactLink = document.getElementById('contactLink');
const modal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close-btn');

// Show the modal when CONTACT is clicked
contactLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link action
    modal.style.display = 'flex'; // Display the modal
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
});

// Close the modal if user clicks outside the modal content
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
