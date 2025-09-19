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
  slides.forEach((slide,i) => {
    slide.style.transform = translateX(${100 * (i - slideIndex)}%);
  });
}

next.addEventListener('click', () => { slideIndex++; showSlide(slideIndex); });
prev.addEventListener('click', () => { slideIndex--; showSlide(slideIndex); });

// عرض أول صورة
showSlide(slideIndex);

// تغيير لون الهيرو تلقائيًا
const hero = document.querySelector('.hero');
const colors = ['#1abc9c', '#3498db', '#9b59b6', '#e74c3c', '#f39c12'];
let colorIndex = 0;

setInterval(() => {
  hero.style.background = colors[colorIndex];
  colorIndex++;
  if(colorIndex >= colors.length) colorIndex = 0;
}, 4000);