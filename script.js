const navBar = document.querySelector("nav");
setInterval(() => {
  console.log(window.scrollY)
  console.log(typeof window.scrollY)
}, 500)
navBar.addEventListener("scroll", event => {
  if (window.scrollY > 498) {
    console.log(true)
    navBar.style.backgroundColor = "white";
  }
}
)