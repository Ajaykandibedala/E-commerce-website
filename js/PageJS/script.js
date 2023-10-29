// menu
document.getElementById("dropdownButton").addEventListener("click", function() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});
// user
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdown-button1");
  const dropdownMenu = document.querySelector(".dropdown-menu1");

  // Show/hide the dropdown menu when the button is clicked
  dropdownButton.addEventListener("click", function () {
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });
});

                            // silders
 let slideIndex = 1;
 showSlides(slideIndex);
                            
  function plusSlides(n) {
  showSlides(slideIndex += n);
}
                            
  function currentSlide(n) {
  showSlides(slideIndex = n);
}
  function showSlides(n) {
  let a;
  let slides = document.getElementsByClassName("mySlidesfade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
      slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (a = 0; a < slides.length; a++) {
    slides[a].style.display = "none";
  }
    for (a = 0; a < dots.length; a++) {
    dots[a].className = dots[a].className.replace(" active", "");
}
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
function autoSlide() {
    plusSlides(1);
    setTimeout(autoSlide, 4000); 
}
autoSlide();
                            

// VR 
const up = document.querySelector(".up"),
    down = document.querySelector(".down"),
    number = document.querySelector(".number");
    let a = 1;
    up.addEventListener("click", ()=>{
      a++;
      a = (a < 10) ? " " + a : a;
      number.innerText = a;
    });

    down.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        a = (a < 10) ? " " + a : a;
        number.innerText = a;
      }
    });