// common-header.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("index.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});