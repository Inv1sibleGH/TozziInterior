  //galerija na index strani
var btnback = document.getElementById("backbutton");
var btnnext = document.getElementById("nextbutton");
var imagedisplay = document.getElementById("galerija")
var images = ["url(index_assets/pexels-falling4utah-2724749.jpg)","url(index_assets/pexels-fotoaibe-1643383.jpg)","url(index_assets/pexels-heyho-6265836.jpg)","url(index_assets/pexels-ml-design-cuisines-806269471-19192263.jpg)"];
var imageindex = 0;
btnback.addEventListener('click', () => {
  imageindex--;
  if(imageindex<0) imageindex = images.length -1;
  updateimage();
});
btnnext.addEventListener('click', () => {
  imageindex++;
  if(imageindex>images.length-1) imageindex = 0;
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