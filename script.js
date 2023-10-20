document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    const loadingIndicator = document.getElementById('loading-indicator');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Show loading indicator while processing
        loadingIndicator.style.display = 'block';

        const name = document.getElementById('patient-name').value;
        const date = document.getElementById('appointment-date').value;
        const time = document.getElementById('appointment-time').value;

        // Validate the appointment date
        const today = new Date().toISOString().split('T')[0];
        if (date < today) {
            loadingIndicator.style.display = 'none';
            confirmationMessage.innerHTML = 'Invalid appointment date. Please select a future date.';
            return;
        }

        // Simulate an asynchronous request (e.g., to a server)
        setTimeout(function () {
            // Hide the loading indicator
            loadingIndicator.style.display = 'none';

            // Basic form validation
            if (!name || !date || !time) {
                confirmationMessage.innerHTML = 'Please fill in all fields.';
            } else {
                // Display a confirmation message
                confirmationMessage.innerHTML = `Thank you, ${name}! Your appointment on ${date} at ${time} has been scheduled.`;

                // Clear the form
                form.reset();
            }
        }, 1500); // Simulate a 1.5-second delay (you can replace this with actual server communication)
    });
});
