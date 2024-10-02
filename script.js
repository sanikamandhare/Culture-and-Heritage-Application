// Handle login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login Successful!");
    // Redirect to home page (add logic)
});

// Show heritage site details
function showDetails(siteName) {
    alert("Showing details for " + siteName);
    // Add logic to display site information
}

// Handle profile form submission
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Profile Updated!");
    // Add logic to update profile
});
