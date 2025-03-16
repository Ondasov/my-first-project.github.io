// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Interactive button on the Home page
    var clickMeButton = document.getElementById("clickMeButton");
    if (clickMeButton) {
      clickMeButton.addEventListener("click", function() {
        alert("Hello! Thank you for visiting our website.");
      });
    }
  
    // Handling contact form submission
    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        var name = document.getElementById("name").value;
        var formResponse = document.getElementById("formResponse");
        formResponse.classList.remove("hidden");
        formResponse.textContent = "Thank you, " + name + ". Your message has been received!";
      });
    }
  });
  