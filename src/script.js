//  On/Off toggle button
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const dropdown = document.getElementById("dropdown");

openBtn.addEventListener('click', function() {
  dropdown.classList.add("open");
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
})

closeBtn.addEventListener('click', function() {
  dropdown.classList.remove("open");
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
})

