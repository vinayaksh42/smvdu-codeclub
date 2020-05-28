var nav = document.getElementById("header");
var links = document.querySelectorAll(".nav-link");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var a = document.scrollingElement.scrollTop;
  console.log(a);
  if (document.scrollingElement.scrollTop > 450) {
    nav.classList.add("feature");

    links.forEach(function (item) {
      item.classList.add("navlinknew");
    });
  } else if (document.scrollingElement.scrollTop < 450) {
    if (nav.classList.contains("feature")) {
      nav.classList.remove("feature");
      nav.style.backgroundColor = "rgba(255,255,255,0)";
      nav.style.height = "auto";
      links.forEach(function (item) {
        item.classList.remove("navlinknew");
      });
    }
  }
}
