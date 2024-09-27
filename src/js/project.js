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
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    projects.forEach(project => container.appendChild(project));
});