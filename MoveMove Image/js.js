const section = document.querySelector("section");

document.addEventListener("mousemove", function(e) {
  section.style.setProperty("--x", e.x + "")
  section.style.setProperty("--y", e.y + "")
} )