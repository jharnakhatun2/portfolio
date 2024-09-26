// dynamic buttons
//values for buttons
const expertise = [
    "JavaScript",
    "ES6",
    "React.js",
    "Rest API",
    "Tailwind CSS",
    "DaisyUI",
    "ReactBootstrap",
    "Responsive website",
    "Bootstrap,HTML5",
    "CSS3",
    "SCSS",
  ];
  const comfortable = [
    "Express.js",
    "Node.js",
    "NoSQL(MongoDB)",
    "MySQL",
    "ReactQuery",
    "Firebase Authentication",
    "JSON Web Token (JWT)",
    "Dotenv",
  ];
  const familiar = ["Next.js", "Redux", "TypeScript"];
  const tools = [
    "Git",
    "GitHub",
    "CLI",
    "Chrome Developers tool",
    "Firebase",
    "Netlify",
    "Vercel",
    "Figma",
    "VS Code",
    "Notepad++",
    "Photoshop",
  ];
  
  //parent div
  const buttonParent = document.getElementById("btn");
  const buttonParent1 = document.getElementById("btn1");
  const buttonParent2 = document.getElementById("btn2");
  const buttonParent3 = document.getElementById("btn3");
  
  //only one function for all button set
  function buttons(values, parentDiv) {
    for (let i = 0; i < values.length; i++) {
      const button = document.createElement("BUTTON");
      button.classList.add("skillBtn");
      button.innerText = values[i];
      parentDiv.appendChild(button);
    }
  }
  //call function for 4 times
  buttons(expertise,buttonParent);
  buttons(comfortable,buttonParent1);
  buttons(familiar,buttonParent2);
  buttons(tools,buttonParent3);