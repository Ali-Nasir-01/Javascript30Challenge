const panels = document.querySelectorAll(".panel");

function togglePanel() {
  const lastOpenItem = document.getElementsByClassName("open")[0];
  if (lastOpenItem && lastOpenItem !== this) {
    lastOpenItem.classList.remove("open");
  }
  this.classList.toggle("open");
}

panels.forEach((item) => item.addEventListener("click", togglePanel));
