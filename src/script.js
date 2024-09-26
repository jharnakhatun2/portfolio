//  On/Off toggle button
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const dropdown = document.getElementById("dropdown");

openBtn.addEventListener("click", function () {
  dropdown.classList.add("open");
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  dropdown.classList.remove("open");
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
});


// Project.html and blog.html
// 1. total project card length

// Project Count
const projectsCount = document.getElementById("projectCount");
const projectCards = document.querySelectorAll(".projectCard");

// Blog Count
const blogsCount = document.getElementById("blogCount");
const blogCards = document.querySelectorAll(".blogCard");

//  function for total cards count
function totalLengthCount(total, cards) {
  if (total) {
    total.textContent = cards.length;
  }
}
totalLengthCount(projectsCount, projectCards);
totalLengthCount(blogsCount, blogCards);
