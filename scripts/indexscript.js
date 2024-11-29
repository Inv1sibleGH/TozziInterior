document.addEventListener("scroll", () => {
    const header = document.querySelector("#header");
  
    // Define the scroll threshold
    const threshold = 550; 
  
    // Check current scroll position
    if (window.scrollY > threshold) {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Darker background
      header.style.height = "3rem";
      document.getElementById("fushlogo").style.display = "block";
      header.style.transition = "background-color 0.3s";
    } else {
      header.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Transparent background
      header.style.height = "10vh";
      document.getElementById("fushlogo").style.display = "none";
      header.style.transition ="";
    }
  });
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