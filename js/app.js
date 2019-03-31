// $(".content").hide();

// $(window).scroll(function() {
//   $(".main-nav").css("opacity", 0.9 -
//   $(window).scrollTop() / 650);
// });
const $readMore = $(".readMore").append('<button class="btn">Read more</button>');
const $btn = $(".btn");

function testAlert() {
  alert("Hi!");
}

// document.getElementByClass("readMore").addEventListener("click", testAlert());


$btn.css("color", "blue");
