const DEFUALT_FORMAT = "seconds";

const countDown = () => {
  var countDownDate = new Date("Sept 9, 2022 17:44:00 UTC").getTime();

  const daysElement = document.querySelector(".days");
  const hoursElement = document.querySelector(".hours");
  const minutesElement = document.querySelector(".minutes");
  const secondsElement = document.querySelector(".seconds");

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    displayTimeLeft(days, hours, minutes, seconds);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      //   document.getElementById("demo").innerHTML = "EXPIRED";
      var element = document.getElementById("countDown");
      element.classList.add("visually-hidden");
    }
  }, 1000);

  function displayTimeLeft(d, h, m, s) {
    daysElement.textContent = d;
    hoursElement.textContent = h;
    minutesElement.textContent = m;
    secondsElement.textContent = s;
  }
};

window.onload = countDown;
