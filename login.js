// Set default email on page load
document.addEventListener('DOMContentLoaded', function() {
    let emailInput = document.getElementById('email');
    // emailInput.value = "example@gmail.com"; // Set default email ID
});

function nextStep() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (email === "") {
        alert("Please enter your email or mobile number");
    } else if (password === "") {
        alert("Please enter your password");
    } else {
        // Show success message
        document.getElementById('loginSuccessMessage').style.display = 'block';

        // Simulate redirection after successful login
        setTimeout(function() {
            alert("Login successful with email: " + email);
            window.location.href = "index.html";  // Redirect to another page (you can replace the URL with the actual one)
        }, 2000);  // Redirect after 2 seconds
    }
}

// Show the Forgot Password Section
function showForgotPassword() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('forgotPasswordSection').style.display = 'block';
}

// Return to Login Form
function returnToLogin() {
    document.getElementById('forgotPasswordSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
}

// Handle Forgot Password Submission
function submitForgotPassword() {
    let forgotEmail = document.getElementById('forgotEmail').value;
    let errorMessage = document.getElementById('errorMessage');
    
    if (forgotEmail === "") {
        errorMessage.style.display = 'block';
    } else {
        alert("Password reset link sent to: " + forgotEmail);
        errorMessage.style.display = 'none';
    }
}
