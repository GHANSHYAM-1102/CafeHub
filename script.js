// Function to validate password
function validatePassword(password) {
    // Regular expressions for capital letter, special character, and length
    var capitalRegex = /[A-Z]/;
    var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var lengthRegex = /^.{8,12}$/;

    // Check if the password meets all criteria
    if (!capitalRegex.test(password)) {
        return false; // Password doesn't contain a capital letter
    }
    if (!specialCharRegex.test(password)) {
        return false; // Password doesn't contain a special character
    }
    if (!lengthRegex.test(password)) {
        return false; // Password length is not between 8 and 12 characters
    }
    return true; // Password meets all criteria
}

// Function to handle form submission
function handleFormSubmission(event) {
    // Prevent the default form submission behavior
    event.validatePassword();

    // Fetch the password input field
    var passwordInput = document.getElementById('inputPassword4');

    // Validate the password
    if (!validatePassword(passwordInput.value)) {
        alert('Password must be 8 to 12 characters long and contain at least one capital letter and one special character.');
        return;
    }

    // If password is valid, you can submit the form
    // For now, let's just log a success message
    console.log('Form submitted successfully!');
}

// Attach the form submission event handler to the form
document.getElementById('registrationForm').addEventListener('submit', handleFormSubmission);
