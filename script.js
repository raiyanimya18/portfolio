// SECTION FADE IN ON SCROLL
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// TYPING EFFECT
const text = "I design and build creative web experiences.";
let index = 0;
function typing(){
  if(index < text.length){
    document.querySelector(".typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typing,50);
  }
}
typing();

// SMOOTH SCROLL
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});

// SKILL BAR ANIMATION
const skillSection = document.querySelector("#skills");
function showSkills(){
  const sectionTop = skillSection.getBoundingClientRect().top;
  if(sectionTop < window.innerHeight - 100){
    document.querySelector(".html").style.width = "90%";
    document.querySelector(".css").style.width = "85%";
    document.querySelector(".js").style.width = "70%";
    document.querySelector(".ui").style.width = "80%";
    document.querySelector(".figma").style.width = "85%";
  }
}
window.addEventListener("scroll", showSkills);

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// CUSTOM CURSOR
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// CURSOR HOVER EFFECT
const hoverTargets = document.querySelectorAll('a, .project-card');
hoverTargets.forEach(el=>{
  el.addEventListener('mouseenter',()=>{ cursor.style.transform='translate(-50%, -50%) scale(2)'; });
  el.addEventListener('mouseleave',()=>{ cursor.style.transform='translate(-50%, -50%) scale(1)'; });
});