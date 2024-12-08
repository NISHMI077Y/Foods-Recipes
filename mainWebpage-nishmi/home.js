document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute("href").substring(1);
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    });
  });
});