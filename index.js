var nav = document.querySelector("#navbar-color");
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if(scroll<340){
    nav.classList = "navbar navbar-expand-lg nav-bg2 fixed-top";
}
else{
  nav.classList = "navbar navbar-expand-lg nav-bg fixed-top";
}
});



