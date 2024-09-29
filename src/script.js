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


// Search function
// document.querySelectorAll('.search-input').forEach( input => {
//   input.addEventListener('input', function(){
//     const inputEl = this.value.toLowerCase();
   
//     function singleCards(cards){
//       cards.forEach(card=>{
//         const title = card.querySelector('.title').textContent.toLowerCase();
//         const description = card.querySelector('.description').textContent.toLowerCase();
  
//         if(title.includes(inputEl) || description.includes(inputEl)){
//           card.classList.remove('hidden');
//         }else{
//           card.classList.add('hidden');
//         }
//       })
//     }
//     singleCards(projectCards);
//     singleCards(blogCards);
//   })
// })

// Search function
document.querySelectorAll('.search-input').forEach(input => {
  input.addEventListener('input', function() {
    const inputEl = this.value.toLowerCase();

    const projectCards = document.querySelectorAll(".projectCard");
    const blogCards = document.querySelectorAll(".blogCard");
    
    const projectContainer = document.querySelector(".project-container");
    const blogContainer = document.querySelector(".blog-container");

    let projectFound = false;
    let blogFound = false;

    function singleCards(cards, container) {
      let found = false;

      cards.forEach(card => {
        const title = card.querySelector('.title').textContent.toLowerCase();
        const description = card.querySelector('.description').textContent.toLowerCase();

        if (title.includes(inputEl) || description.includes(inputEl)) {
          card.classList.remove('hidden');
          found = true;
        } else {
          card.classList.add('hidden');
        }
      });

      if (!found) {
        container.querySelector('.no-results').classList.remove('hidden');
      } else {
        container.querySelector('.no-results').classList.add('hidden');
      }

      return found;
    }

    // Handle project cards search
    projectFound = singleCards(projectCards, projectContainer);
    
    // Handle blog cards search
    blogFound = singleCards(blogCards, blogContainer);
  });
});
