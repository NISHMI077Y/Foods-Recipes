// const container = document.getElementById("container");
// const LoginLink = document.getElementById("SignInLink");
// const RegisterLink = document.getElementById("SignUpLink");
// RegisterLink.addEventListener("click", () => {
//   container.classList.add("active");
// });
// LoginLink.addEventListener("click", () => {
//   container.classList.add("active");
// });
const container = document.getElementById("container");
const LoginLink = document.getElementById("SignInLink");
const RegisterLink = document.getElementById("SignUpLink");

RegisterLink.addEventListener("click", () => {
  container.classList.add("active"); // Switch to the registration form
});

LoginLink.addEventListener("click", () => {
  container.classList.remove("active"); // Switch back to the login form
});

