// Blog card sorting code according to category button
// Select all sorting buttons
const buttons = document.querySelectorAll('.sort-btn');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the value of the clicked button (i.e., the category to sort by)
    const selectedTag = this.value;

    // Select all project cards
    const blogs = Array.from(document.querySelectorAll('.blogCard'));

    // Sort blogs based on whether they include the selected tag in their data-tags
    blogs.sort((a, b) => {
      const tagsA = a.getAttribute('data-tags').split(',');
      const tagsB = b.getAttribute('data-tags').split(',');

      // Check if the selected tag exists in the project's tags
      const aHasTag = tagsA.includes(selectedTag);
      const bHasTag = tagsB.includes(selectedTag);

      // Sort logic: bring blogs with the selected tag to the top
      if (aHasTag && !bHasTag) return -1;
      if (!aHasTag && bHasTag) return 1;
      return 0;
    });

    // Clear the current blogs container and re-append sorted blogs
    const container = document.getElementById('blog-container');
    container.innerHTML = '';
    blogs.forEach(project => container.appendChild(project));
  });
});


