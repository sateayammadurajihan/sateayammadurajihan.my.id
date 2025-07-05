<?php session_start(); ?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Login - Sate Jihan</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="login-avatar">
        <i class="fas fa-user"></i>
      </div>
      <h2>Form Login</h2>
      <form method="POST" action="login_process.php">
        <div class="input-group">
          <i class="fas fa-envelope"></i>
          <input type="email" name="email" placeholder="Email / ID" required>
        </div>
        <div class="input-group">
          <i class="fas fa-lock"></i>
          <input type="password" name="password" placeholder="Password" required>
        </div>
        <div class="options">
          <label><input type="checkbox"> Remember me</label>
          <a href="forgot_password.php">Forgot Password?</a>
        </div>
        <button type="submit">LOGIN</button>
      </form>
      <p>Belum punya akun? <a href="register.php">Daftar di sini</a></p>
    </div>
  </div>
</body>
</html>
