const countDownDate = new Date("April 25, 2023 00:00:00").getTime();

let x = setInterval(function() {

  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  console.log(days + "d " + hours + "h " + minutes + "m ");

  if (distance < 0) {
    clearInterval(x);
    console.log("EXPIRED");
  }
}, 1000);
