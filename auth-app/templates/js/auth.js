document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form[action='/login/submit']");
  const registerForm = document.querySelector("form[action='/register/submit']");
  const toggle = document.getElementById("togglePassword");
  const password = document.getElementById("password");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      const username = loginForm.username.value.trim();
      const password = loginForm.password.value.trim();

      if (!username || !password) {
        alert("Username dan Password tidak boleh kosong.");
        e.preventDefault();
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      const username = registerForm.username.value.trim();
      const password = registerForm.password.value.trim();

      if (!username || !password) {
        alert("Username dan Password tidak boleh kosong.");
        e.preventDefault();
      } else if (password.length < 6) {
        alert("Password minimal 6 karakter.");
        e.preventDefault();
      }
    });
  }

  // 👁️ Toggle show/hide password
  if (toggle && password) {
    toggle.addEventListener("click", () => {
      const type = password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      toggle.textContent = type === "password" ? "👁" : "🙈";
    });
  }
});
