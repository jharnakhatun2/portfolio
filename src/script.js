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
document.querySelectorAll(".search-input").forEach((input) => {
  input.addEventListener("input", function () {
    const inputEl = this.value.toLowerCase();

    // Selecting all project and blog cards
    const projectCards = document.querySelectorAll(".projectCard");
    const blogCards = document.querySelectorAll(".blogCard");
    const viewMoreBtn = document.getElementById("view-more");

    let visibleCards = [];

    // Selecting the project and blog containers
    const projectContainer = document.querySelector(".project-container");
    const blogContainer = document.querySelector(".blog-container");

    // Function to handle showing and hiding cards based on input
    function singleCards(cards, container) {
      let found = false; // Flag to track if any card matches the search term

      cards.forEach((card) => {
        const title = card.querySelector(".title").textContent.toLowerCase();
        const description = card
          .querySelector(".description")
          .textContent.toLowerCase();

        // Check if title or description contains the search term
        if (title.includes(inputEl) || description.includes(inputEl)) {
          card.style.display = "block";
          found = true;
          visibleCards.push(card);
        } else {
          card.style.display = "none";
        }
      });

      // Show 'No results' message if no cards were found
      const noResultsEl = container.querySelector(".no-results");
      if (noResultsEl) {
        if (!found) {
          noResultsEl.classList.remove("hidden");
        } else {
          noResultsEl.classList.add("hidden");
        }
      }
    }

    // Handle project cards search, ensure container exists
    if (projectContainer && projectCards.length) {
      console.log("Project search triggered");
      visibleCards = [];
      singleCards(projectCards, projectContainer);
      // Hide the View More button when search results are shown
      if (inputEl.length > 0) {
        viewMoreBtn.style.display = "none";
      } else {
        updateViewMore(visibleCards); // Only show View More when there is no search or search is cleared
      }
    } else {
      console.warn("No project container or project cards found.");
    }

    // Handle blog cards search, ensure container exists
    if (blogContainer && blogCards.length) {
      console.log("Blog search triggered");
      singleCards(blogCards, blogContainer);
    } else {
      console.warn("No blog container or blog cards found.");
    }
  });
});

