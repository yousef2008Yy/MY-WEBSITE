function changeBackground() {
  // أرقام عشوائية من 0 لـ 255
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // نص اللون بصيغة RGB (نستخدم + لتجنب مشاكل backticks)
  var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

  // نغيّر خلفية الصفحة
  document.body.style.backgroundColor = randomColor;
}function changeBackground() {
  // احتمال: إما نغير للون أو لصورة
  var randomChoice = Math.random();

  if (randomChoice < 0.5) {
    // 🎨 تغيير للألوان العشوائية
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.body.style.backgroundImage = ""; // نلغي أي صورة
    document.body.style.backgroundColor = randomColor;

    // تغيير لون الزر
    var button = document.querySelector("button");
    button.style.backgroundColor = randomColor;
    button.style.color = "white";

    // تغيير النصوص
    var heading = document.querySelector("h1");
    var paragraph = document.querySelector("p");
    heading.style.color = "darkblue";
    paragraph.style.color = "darkred";
  } else {
    // 🖼 تغيير لصورة عشوائية
    var images = [
      "url('https://picsum.photos/800/600?random=1')",
      "url('https://picsum.photos/800/600?random=2')",
      "url('https://picsum.photos/800/600?random=3')",
      "url('https://picsum.photos/800/600?random=4')"
    ];

    var randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = randomImage;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = ""; // نلغي اللون

    // تغيير لون الزر للون مميز عشان يبان
    var button = document.querySelector("button");
    button.style.backgroundColor = "rgba(0,0,0,0.6)";
    button.style.color = "white";

    // النصوص تبقى بيضاء عشان تبان على الخلفية
    var heading = document.querySelector("h1");
    var paragraph = document.querySelector("p");
    heading.style.color = "white";
    paragraph.style.color = "white";
  }
}