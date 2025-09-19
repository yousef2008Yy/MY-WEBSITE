// نموذج التواصل
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  alert('تم إرسال رسالتك بنجاح! سيتم الرد عليك قريباً.');
  contactForm.reset();
});

// سلايدر الصور
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
function showSlide(n){
  if(n >= slides.length) slideIndex = 0;
  if(n < 0) slideIndex = slides.length - 1;
  slides.forEach((slide,i) => { slide.style.transform = translateX(${100 * (i - slideIndex)}%); });
}
next.addEventListener('click', () => { slideIndex++; showSlide(slideIndex); });
prev.addEventListener('click', () => { slideIndex--; showSlide(slideIndex); });
showSlide(slideIndex);

// Dark Mode Toggle
const darkModeBtn = document.getElementById('darkModeToggle');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});