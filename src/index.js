document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const sun = document.querySelector(".Sun");
  const moon = document.querySelector(".moon");

  function togglesModes(enable) {
    if (enable) {
      body.classList.add("darkMode");
    } else {
      body.classList.remove("darkMode");
    }
  }
  moon.addEventListener("click", () => togglesModes(true));
  sun.addEventListener("click", () => togglesModes(false));
});
