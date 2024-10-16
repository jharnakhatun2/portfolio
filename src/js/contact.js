const form = document.getElementById("contactForm");
const fname = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

// Contact form with emailjs
function sendEmail() {
  let templateParams = {
    name: fname.value,
    email: email.value,
    message: message.value,
  };

  const serviceID = "service_xs02b38";
  const templateID = "template_8wnbzmb";

  emailjs
    .send(serviceID, templateID, templateParams)
    .then((response) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(response);
    })
    .catch((err) => console.log(err));
}

// Form validation
function showMessage(input, message, type) {
  const small = input.parentNode.querySelector('small');
  small.innerText = message;
  small.className = type ? 'success' : 'error'; // Update input class based on success or error
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, "", true); // If successful, clear the error message
}

function hasValue(input, message) {
  if (input.value.trim() === "") {
    return showError(input, message); // Show error if input is empty
  }
  return showSuccess(input); // Show success if value is provided
}

function emailValidForm(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const emailValue = input.value.trim();
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simplified email regex pattern

  if (!emailFormat.test(emailValue)) {
    return showError(input, invalidMsg);
  }
  return showSuccess(input);
}

const nameMsg = "Please enter your name!";
const messageMsg = "Please enter your message!";
const emailMsg = "Please enter your email!";
const emailInvalid = "Please enter a correct email address format!";

// Add event listener to handle form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting and refreshing the page

  const validName = hasValue(fname, nameMsg);
  const validMsg = hasValue(message, messageMsg);
  const validEmailFormate = emailValidForm(email, emailMsg, emailInvalid);

  // Proceed if all validations pass
  if (validName && validMsg && validEmailFormate) {
    alert("Your message has been sent successfully");
    sendEmail();
  }
});

