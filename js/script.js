let $ = document;
let navLinks = $.querySelectorAll("nav a");
let startEl = $.querySelector(".start");
// navLinks.forEach((navLink)=>{
//     navLink.addEventListener("mouseenter",(e)=>{
//         startEl.style.width =  `${e.target.offsetWidth}px`
//         startEl.style.left = `${e.target.offsetLeft}px`
//     })
// })

navLinks.forEach(
  (navLink) =>
    (navLink.onmouseenter = (e) => {
      startEl.style.width = `${e.target.offsetWidth}px`;
      startEl.style.left = `${e.target.offsetLeft}px`;
    })
);
