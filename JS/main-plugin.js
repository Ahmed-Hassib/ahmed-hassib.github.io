// preloader
var preloader = document.getElementById("preloader");
// navbar ..
var navbar = document.querySelector(".navbar");
// up arrow ..
var upArrow = document.querySelector(".arrow-up");
// h1 in hero text ..
var mainHead = document.querySelector(".hero-text h1");
// group button that filter project ..
var projectBtn = document.querySelectorAll(".content-btn-group .btn");
// all projects ..
var projects = Array.from(
  document.querySelectorAll(".portfolio-content .project")
);
// get order range of the projects ..
var orderRange = Array.from(Array(projects.length).keys());

// self invoke function ..
(function () {
  document.body.style.overflowY = "hidden";
  navbar.style.display = "none";
  upArrow.style.display = "none";

  window.onload = function () {
    preloader.style.display = "none";
    document.body.style.overflowY = "auto";
    navbar.style.display = "block";
    upArrow.style.display = "auto";
  };
  // loop on buttons to filter projects ..
  for (i = 0; i < projectBtn.length; i++) {
    // add event on each button ..
    projectBtn[i].addEventListener("click", function () {
      // check the custom attribute ..
      // if clicked on all button display all projects ..
      // else check the category name to display the corresponding projects that belongs to this category ..
      if (this.dataset.categoryName === "all") {
        projects.forEach((project) => {
          project.style.display = "block";
        });
      } else {
        // filter projects ..
        projects.filter((project) => {
          if (project.dataset.projectCategory === this.dataset.categoryName) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      }
    });
  }

  // add event when up arrpw ..
  upArrow.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });

  // when scroll the window ..
  window.addEventListener("scroll", function () {
    if (window.scrollY > 250) {
      upArrow.style.display = "block";
      navbar.classList.add("bg-danger", "bg-gradient");
    } else {
      upArrow.style.display = "none";
      navbar.classList.remove("bg-danger", "bg-gradient");
    }
  });

  // shuffle projects ..
  shuffleProjects(orderRange);
  // show shuffled projects ..
  projects.forEach((project, index) => {
    project.style.order = orderRange[index];
  });
})();

// shuffle projeccts to show it in random order ..
function shuffleProjects(array) {
  // get array length ..
  let current = array.length,
    temp,
    random;
  // loop on array ..
  while (current > 0) {
    // get random order ..
    random = Math.floor(Math.random() * current);
    // decrease the current ..
    current--;
    // save current element value ..
    temp = array[current];
    // get random element value ..
    array[current] = array[random];
    // random element == current element ..
    array[random] = temp;
  }
  return array;
}
