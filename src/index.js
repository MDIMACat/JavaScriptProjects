document.addEventListener("DOMContentLoaded", () => {
  let color = [
    "#f48c06",
    "#22333b",
    "#344e41",
    "#e9c46a",
    "#6a994e",
    "#DC2F02",
  ];
  let circleColorArray = document.querySelectorAll(".circle");
  let body = document.querySelector("body");

  for (let i = 0; i < circleColorArray.length; i++) {
    circleColorArray[i].style.backgroundColor = color[i];
    circleColorArray[i].addEventListener("click", () => {
      body.style.backgroundColor = color[i];
    });
  }
});
