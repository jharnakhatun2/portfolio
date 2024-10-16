// Sorting function
document.getElementById('sort-select').addEventListener('change', function() {
    // Get the selected tag from the dropdown
    const selectedTag = this.value;

    // Select all the project cards
    const projects = Array.from(document.querySelectorAll('.projectCard'));

    // Sort projects based on whether they include the selected tag in their data-tags
    projects.sort((a, b) => {
        const tagsA = a.getAttribute('data-tags').split(',');
        const tagsB = b.getAttribute('data-tags').split(',');

        // Check if the selected tag exists in the project's tags
        const aHasTag = tagsA.includes(selectedTag);
        const bHasTag = tagsB.includes(selectedTag);

        // Sort logic: bring projects with the selected tag to the top
        if (aHasTag && !bHasTag) return -1;
        if (!aHasTag && bHasTag) return 1;
        return 0;
    });

    // Clear and re-append sorted projects
    const container = document.querySelector('.project-container');
    container.innerHTML = '';
    projects.forEach(project => container.appendChild(project));
});



//function for view more button
document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 3;  // Number of items to show by default
    let currentIndex = itemsPerPage;  // Start by showing the first 6 items
  
    const projectCards = document.querySelectorAll('.projectCard');
    const viewMoreBtn = document.getElementById('view-more');
  
    // Function to display more items
    function displayMoreItems(cards) {
      const nextIndex = currentIndex + itemsPerPage;
  
      projectCards.forEach((card, index) => {
        if (index >= currentIndex && index < nextIndex) {
          card.style.display = 'block'; // Show the card
        }
      });
  
      currentIndex = nextIndex;  // Update the current index
  
      // Hide the "View More" button if all items are shown
      if (currentIndex >= projectCards.length) {
        viewMoreBtn.style.display = 'none';
      }
    }
  
    // Initially hide all cards
    projectCards.forEach(card => card.style.display = 'none');
  
    // Display the first 6 items when the page loads
    projectCards.forEach((card, index) => {
      if (index < itemsPerPage) {
        card.style.display = 'block';
      }
    });
  
    // Event listener for "View More" button
    viewMoreBtn.addEventListener('click', displayMoreItems);
  });

// toggle extra tags
 // Select all toggle links
const toggleLinks = document.querySelectorAll('.toggle-tags');

toggleLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Find the closest .tags element (within the same card)
    const tagsContainer = this.closest('.tags');
    
    // Find all extra-tags within this card's tags container
    const extraTags = tagsContainer.querySelectorAll('.extra-tags');
    
    // Toggle the hidden class for each extra tag
    const isHidden = extraTags[0].classList.contains('hidden');
    extraTags.forEach(tag => {
      tag.classList.toggle('hidden');
    });
    
    // Update the link text based on the state
    this.textContent = isHidden ? '- less' : '+ more';
  });
});
  
  