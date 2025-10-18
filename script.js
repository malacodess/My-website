// Navigation Links
const home = document.querySelector("#home-link");
const about = document.querySelector("#about-link");
const projects = document.querySelector("#projects-link");
const contact = document.querySelector("#contact-link");
const links = document.querySelector("#links-link");

// Coding Buddy
const buddy = document.querySelector(".buddy");
const buddymsg = document.querySelector(".buddy-msg");
const sections = document.querySelectorAll("section");

buddy.addEventListener("click", () => {
  let current = "";

  // Find current section
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // Section-specific messages
  switch (current) {
    case "home":
      buddymsg.innerText = "Hi, I'm Kashmala's coding buddy!";
      break;
    case "about":
      buddymsg.innerText = "Umm, she is so bad at chess!";
      break;
    case "projects":
      buddymsg.innerText = "She is still learning...";
      break;
    case "contact":
      buddymsg.innerText = "Don’t be shy, just send her a message!";
      break;
    case "links":
      buddymsg.innerText = "Thank you for visiting our website <3";
      break;
    default:
      buddymsg.innerText = "Hi, I’m Kashmala’s coding buddy.";
  }

  // Show message
  buddymsg.style.display = "block";

  // Hide after 2s
  setTimeout(() => {
    buddymsg.style.display = "none";
  }, 2000);
});

// Hamburger Toggle
function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("active");
}
