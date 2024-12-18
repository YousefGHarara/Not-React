
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    console.log(e);
    if(e.isIntersecting) {
      e.target.classList.add("show")

    }else {
      e.target.classList.remove("show")
    }
  })
})


let hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((e) => observer.observe(e))
