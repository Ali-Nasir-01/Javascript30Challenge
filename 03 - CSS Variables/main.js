function handleChange() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}

const inputs = document.querySelectorAll("#setting-container input");

inputs.forEach((input) => input.addEventListener("change", handleChange));
