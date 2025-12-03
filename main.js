document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_fjfv1dq", "template_2j0n5pp", this).then(
      () => {
        document.getElementById("status-message").innerText =
          "✅ Message sent successfully!";
      },
      (error) => {
        document.getElementById("status-message").innerText =
          "❌ Failed to send message.";
        console.error(error);
      }
    );

    this.reset();
  });
