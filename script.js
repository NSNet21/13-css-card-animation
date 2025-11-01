const card = document.getElementsByClassName("card");

// card expand and collapse effect
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function () {
    const isActive = this.classList.contains("active");
    if (!isActive) {
      for (let j = 0; j < card.length; j++) {
        card[j].classList.remove("active");
      }
      this.classList.add("active");
    } else if (isActive) {
      this.classList.remove("active");
    }
  });
}

// theme swapper
const themeSwap = document.getElementById("themeSwap");
let themeIcon = themeSwap.querySelector("i");
const html = document.documentElement;

// load saved theme or default
const savedTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", savedTheme);

// determine current icon
const isDark = savedTheme === "dark";
themeIcon.classList.add(isDark ? "bxs-sun" : "bxs-moon");
themeIcon.classList.remove(isDark ? "bxs-moon" : "bxs-sun");

themeSwap.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  let newTheme;
  let isDark = currentTheme === "dark" ? true : false;

  // add the theme transition
  html.classList.add("theme-transition");
  if (isDark) {
    newTheme = "light";
    html.setAttribute("data-theme", newTheme);
    themeIcon.classList.add("fade-icon");
    localStorage.setItem("theme", newTheme);

    setTimeout(() => {
      themeIcon.classList.add("bxs-moon");
      themeIcon.classList.remove("bxs-sun");
      themeIcon.classList.remove("fade-icon");
    }, 600);
  } else {
    newTheme = "dark";
    html.setAttribute("data-theme", newTheme);
    themeIcon.classList.add("fade-icon");
    localStorage.setItem("theme", newTheme);

    setTimeout(() => {
      themeIcon.classList.add("bxs-sun");
      themeIcon.classList.remove("bxs-moon");
      themeIcon.classList.remove("fade-icon");
    }, 600);
  }

  // remove theme transition
  setTimeout(() => {
    html.classList.remove("theme-transition");
  }, 600); /*  duration time have to equal or longer than
  transition-duration in css */
});
