// Handle user details form submission
document.getElementById('userDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;

    // Validate the phone number (10 digits)
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    // Validate the password length (8 to 16 characters)
    if (password.length >= 8 && password.length <= 16) {
        var myModalEl = document.getElementById('userDetailsModal');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();
        
        var successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
    } else {
        alert("Password must be 8 to 16 characters.");
    }
});

// Handle login button click
document.getElementById('loginButton').addEventListener('click', function() {
    // Redirect to the login page or perform any action
    window.location.href = 'login.html'; // Replace with your actual login page URL
});

// Handle login button in success modal
document.getElementById('loginButtonSuccess').addEventListener('click', function() {
    // Redirect to the login page or perform any action
    window.location.href = 'login.html'; // Replace with your actual login page URL
});
