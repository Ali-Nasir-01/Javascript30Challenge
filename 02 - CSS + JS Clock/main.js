const updateHandlers = () => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  document.getElementById("hour-handler").style.transform = `rotate(${
    hour * 30 + 450
  }deg)`;
  document.getElementById("minute-handler").style.transform = `rotate(${
    minute * 6 + 90
  }deg)`;
  document.getElementById("second-handler").style.transform = `rotate(${
    second * 6 + 90
  }deg)`;
};

setInterval(updateHandlers, 1000);

updateHandlers();
