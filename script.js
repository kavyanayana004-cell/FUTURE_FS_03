// Initialize EmailJS with your Public Key
emailjs.init("k8VmGAXjL2crV2SIE");

// Get form and status message element
const form = document.getElementById("contact-form");
const status = document.getElementById("status-message");

// Listen for form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.textContent = "Sending...";

    emailjs.sendForm(
        "service_jp7pyj8",      // Your Service ID
        "template_vaacgae",     // Your Template ID
        form
    )
    .then(function () {
        status.textContent = "Message sent successfully!";
        status.style.color = "green";

        form.reset();
    })
    .catch(function (error) {
        console.error("EmailJS Error:", error);

        status.textContent = "Failed to send message.";
        status.style.color = "red";
    });
});