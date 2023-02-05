// sponserBtn.addEventListener("click", function () {
//   document.location.href = "https://forms.gle/UjCT6LfjXCXEpAXK6";
// });

// var cursor = document.querySelector(".cursor"),
//   cursorScale = document.querySelectorAll(".cursor-scale"),
//   mouseX = 0,
//   mouseY = 0;

// gsap.to({}, 0.016, {
//   repeat: -1,

//   onRepeat: function () {
//     gsap.set(cursor, {
//       css: {
//         left: mouseX,
//         top: mouseY,
//       },
//     });
//   },
// });

// window.addEventListener("mousemove", function (e) {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// });

$(".container").click(function () {
  $(".container").removeClass("active");
  $(this).addClass("active");
});
