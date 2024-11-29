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