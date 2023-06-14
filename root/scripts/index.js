const btnDarkMode = document.querySelector(".btnDark");
const colorBack = document.body;

btnDarkMode.addEventListener("click", function () {
  colorBack.classList.toggle("darkMode");

  if (colorBack.classList.)) {
    btnDarkMode.textContent = "Light Mode";contains("darkMode"
  } else {
    btnDarkMode.textContent = "Dark Mode";
  }
});
