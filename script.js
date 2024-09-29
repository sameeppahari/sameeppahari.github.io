document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Show a basic message (or you could send this data to a server)
    alert("Thank you, " + name + "! Your message has been sent.");

    // Clear the form
    document.getElementById("contactForm").reset();
});
