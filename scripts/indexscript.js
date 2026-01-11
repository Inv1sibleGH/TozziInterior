document.addEventListener("scroll", () => {
    const header = document.querySelector("#header");
  
    // visina na kojoj se smanjuje header
    const threshold = 550; 
  
    if (window.scrollY > threshold) {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      header.style.height = "4.5rem";
      document.getElementById("fushlogo").style.display = "block";
      header.style.transition = "background-color 0.3s";
    } else {
      header.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
      header.style.height = "10vh";
      document.getElementById("fushlogo").style.display = "none";
      header.style.transition ="";
    }
  });

  //galerija na index strani
var btnback = document.getElementById("backbutton");
var btnnext = document.getElementById("nextbutton");
var imagedisplay = document.getElementById("galerija")
var images = ["url(index_assets/pexels-falling4utah-2724749.jpg)","url(index_assets/pexels-fotoaibe-1643383.jpg)","url(index_assets/pexels-lexovertoom-1109541.jpg)","url(index_assets/pexels-photo-7195736.jpeg)"]
var imageindex = 0;
btnback.addEventListener('click', () => {
  imageindex = (imageindex + 1) % images.length;
  updateimage();
});
btnnext.addEventListener('click', () => {
  imageindex = (imageindex - 1 + images.length) % images.length;
  updateimage();
});
function updateimage(){
  imagedisplay.style.backgroundImage = images[imageindex];
}

//hamburger meni
var hamburgerbtn = document.getElementById("burger-button");
var navmenu = document.getElementById("navMenu");
hamburgerbtn.addEventListener('click', () => {
  if (navmenu.classList.contains("nav-menu-open")) {
    navmenu.classList.remove("nav-menu-open");
    
  } else {
    navmenu.classList.add("nav-menu-open");
  }

});