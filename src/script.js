// Tab code as sidebar
document.addEventListener('DOMContentLoaded', ()=>{
  const tabGroup = document.querySelectorAll(".tab");
  tabGroup.forEach((tab)=>{
    const buttons = tab.querySelectorAll('.tablinks');
    const contents = document.querySelectorAll('.tabcontent');
    
   buttons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
       // Retrieve menu and animationClass from data attributes
      const targetId = button.getAttribute('data-menu');
      const dataAnimation = button.getAttribute('data-animation');

      // Hide all tab content and remove animations
      contents.forEach(content=>{
        content.style.display = 'none';
        content.classList.remove("slide-in-right", "slide-in-left", "slide-in-top", "slide-in-bottom");
      });
      
      // Remove "active" class from all buttons
      buttons.forEach(btn=>btn.classList.remove('active'));
      
      // Show the selected tab content and apply the animation class
      const selectedId = document.getElementById(targetId);
      selectedId.style.display='block';
      selectedId.classList.add(dataAnimation);

    // Add the "active" class to the clicked tab
      event.currentTarget.classList.add('active');
 
    })
     
   })
    buttons[0].click();
  })
  
})

//Side bar On/Off toggle button
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
