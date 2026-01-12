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
