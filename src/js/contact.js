const form = document.getElementById('contactForm');
const fname = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

//contact form with emailjs
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
        alert("your message sent successfully");
      })
      .catch((err) => console.log(err));
  }
  

//   form validation
function showMessage(input, message, type){
    const small = input.querySelector('small');
    small.innerText = message;
    input.className = type? 'success' : 'error';
    return type;
}

function showError(input, message){
  return showMessage(input, message, false);
}

function showSuccess(input){
  return showMessage(input, "", true);
}

const nameMsg = "Please enter your name";
const emailMsg = "Please enter your email";
const emailInvalid = "Please enter a correct email address format";

form.addEventListener('submit', function(e){
    e.preventDefault();
})