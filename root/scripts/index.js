const btnDarkMode = document.querySelector(".btnDark");
const colorBack = document.body;

btnDarkMode.addEventListener("click", function () {
  colorBack.classList.toggle("darkMode");

  if (colorBack.classList.contains("darkMode")) {
    btnDarkMode.textContent = "Light Mode";
  } else {
    btnDarkMode.textContent = "Dark Mode";
  }
});
