const hourHand = document.getElementById("hour-handler");
const minuteHand = document.getElementById("minute-handler");
const secondHand = document.getElementById("second-handler");

const updateHandlers = () => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  hourHand.style.transform = `rotate(${hour * 30 + 450}deg)`;
  minuteHand.style.transform = `rotate(${minute * 6 + 90}deg)`;
  secondHand.style.transform = `rotate(${second * 6 + 90}deg)`;
};

setInterval(updateHandlers, 1000);

updateHandlers();
