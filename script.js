// تغيير لون الخلفية
function changeBackground() {
  const colors = ["#7ed6df", "#e056fd", "#ff7979", "#badc58", "#f9ca24", "#22a6b3"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}

// Contact Form (تجريبي - مش بيرسل فعلياً)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("شكراً على رسالتك! 🚀");
});