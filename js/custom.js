(function () {
  "use strict";

  document
    .querySelector("#navbarSideCollapse")
    .addEventListener("click", function () {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });

  var header = document.getElementById("header");

  const changeBGColor = () => {
    if (window.scrollY >= 80) {
      header.classList
        .remove("bg-transparent")
        .classList.add("bg-black shadow-sm");
    } else {
      header.classList
        .remove("bg-transparent")
        .classList.add("bg-black shadow-sm");
    }
  };

  window.addEventListener("scroll", changeBGColor);
})();
