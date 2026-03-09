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

// TYPING EFFECT (only if element exists)
const typingElement = document.querySelector(".typing");
if (typingElement) {
  const text = "I build smart, connected digital experiences that blend design and technology.";
  let index = 0;
  function typing(){
    if(index < text.length){
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typing,50);
    }
  }
  typing();
}

// SMOOTH SCROLL (only for in-page hash links)
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetSelector = this.getAttribute("href");
    const target = document.querySelector(targetSelector);

    // Let the browser handle links if target section does not exist.
    if (!target) {
      return;
    }

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// SKILL BAR ANIMATION (only if skill section exists)
const skillSection = document.querySelector("#skills");
if (skillSection) {
  function showSkills(){
    const sectionTop = skillSection.getBoundingClientRect().top;
    if(sectionTop < window.innerHeight - 100){
      const htmlSkill = document.querySelector(".html");
      const cssSkill = document.querySelector(".css");
      const jsSkill = document.querySelector(".js");
      const uiSkill = document.querySelector(".ui");
      const figmaSkill = document.querySelector(".figma");
      
      if (htmlSkill) htmlSkill.style.width = "90%";
      if (cssSkill) cssSkill.style.width = "85%";
      if (jsSkill) jsSkill.style.width = "90%";
      if (uiSkill) uiSkill.style.width = "80%";
      if (figmaSkill) figmaSkill.style.width = "70%";
    }
  }
  window.addEventListener("scroll", showSkills);
}

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Add both click and touch events for better mobile support
hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  navLinks.classList.toggle("active");
});

hamburger.addEventListener("touchstart", (e) => {
  e.preventDefault();
  navLinks.classList.toggle("active");
}, { passive: false });

// CUSTOM CURSOR (works on both desktop and mobile)
const cursor = document.querySelector('.cursor');

if (cursor) {
  // Mouse move for desktop
  document.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
  });

  // Touch move for mobile/tablets
  document.addEventListener('touchmove', e => {
    if (e.touches.length > 0) {
      cursor.style.top = e.touches[0].clientY + 'px';
      cursor.style.left = e.touches[0].clientX + 'px';
    }
  }, { passive: true });

  // Touch start for mobile/tablets
  document.addEventListener('touchstart', e => {
    if (e.touches.length > 0) {
      cursor.style.top = e.touches[0].clientY + 'px';
      cursor.style.left = e.touches[0].clientX + 'px';
    }
  }, { passive: true });

  // CURSOR HOVER EFFECT
  const hoverTargets = document.querySelectorAll('a, .project-card');
  if (hoverTargets.length > 0) {
    hoverTargets.forEach(el=>{
      el.addEventListener('mouseenter',()=>{ cursor.style.transform='translate(-50%, -50%) scale(2)'; });
      el.addEventListener('mouseleave',()=>{ cursor.style.transform='translate(-50%, -50%) scale(1)'; });
    });
  }
}