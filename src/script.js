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


// 1. total project card length for Project.html and blog.html

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



// Search function
document.querySelectorAll('.search-input').forEach(input => {
  input.addEventListener('input', function() {
    const inputEl = this.value.toLowerCase();

    // Selecting all project and blog cards
    const projectCards = document.querySelectorAll(".projectCard");
    const blogCards = document.querySelectorAll(".blogCard");
    
    // Selecting the project and blog containers
    const projectContainer = document.querySelector(".project-container");
    const blogContainer = document.querySelector(".blog-container");

    // Function to handle showing and hiding cards based on input
    function singleCards(cards, container) {
      let found = false; // Flag to track if any card matches the search term

      cards.forEach(card => {
        const title = card.querySelector('.title').textContent.toLowerCase();
        const description = card.querySelector('.description').textContent.toLowerCase();

        // Check if title or description contains the search term
        if (title.includes(inputEl) || description.includes(inputEl)) {
          card.classList.remove('hidden');
          found = true;
        } else {
          card.classList.add('hidden');
        }
      });

      // Show 'No results' message if no cards were found
      if (!found) {
        container.querySelector('.no-results').classList.remove('hidden');
      } else {
        container.querySelector('.no-results').classList.add('hidden');
      }
    }

    // Handle project cards search, ensure container exists
    if (projectContainer) {
      singleCards(projectCards, projectContainer);
    }

    // Handle blog cards search, ensure container exists
    if (blogContainer) {
      singleCards(blogCards, blogContainer);
    }
  });
});
