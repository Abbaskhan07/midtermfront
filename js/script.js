document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("form-status").textContent =
        "Your form is valid. This is a demo, so no message has been sent.";
});
