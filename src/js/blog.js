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
    const container = document.querySelector('.blog-container');
    container.innerHTML = '';
    blogs.forEach(project => container.appendChild(project));
  });
});



// recent post function
document.addEventListener("DOMContentLoaded", function() {
  // Select all blog posts from the left sidebar
  const allBlogPosts = document.querySelectorAll(".blog-container .blogCard .title");

  // Select the container for recent posts in the right sidebar
  const recentPostsList = document.getElementById("recent-posts-list");

  // Clear any existing posts in the recent posts list
  recentPostsList.innerHTML = "";

  // Limit to the 4 most recent posts
  const recentPosts = Array.from(allBlogPosts).slice(0, 4);

  // Loop through the recent posts and display them in the right sidebar
  recentPosts.forEach(post => {
    // Create a new list item
    const li = document.createElement("li");
    li.classList.add("py-2"); 

    // Create a new anchor element and copy the href and text from the original post
    const a = document.createElement("a");
    a.href = post.href; 
    a.textContent = post.textContent; 

    // Append the anchor to the list item
    li.appendChild(a);

    // Append the list item to the recent posts list in the right sidebar
    recentPostsList.appendChild(li);
  });
});



