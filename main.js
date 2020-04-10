const countdown = document.querySelector(".countdown");

// set Launch Date (ms)
const launchDate = new Date("September 19, 2022 12:00:00").getTime();
// Get todays date and time
const intvl = setInterval(() => {
  // Get todays date and current time
  const now = new Date().getTime();
  // Calculate milliseconds till launch
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display timer
  countdown.innerHTML = `
  <div>${days}<span> Days</span></div> 
  <div>${hours}<span> Hours</span></div>
  <div>${mins}<span> Minutes</span></div>
  <div>${seconds}<span> Seconds</span></div>
  `;
}, 1000);
