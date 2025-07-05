<?php session_start(); ?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Lupa Password - Sate Jihan</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="login-avatar">
        <i class="fas fa-lock"></i>
      </div>
      <h2>Lupa Password</h2>

      <!-- Notifikasi -->
      <?php if (isset($_SESSION['notif'])): ?>
        <div class="notif <?php echo $_SESSION['notif_type']; ?>">
          <?php echo $_SESSION['notif']; unset($_SESSION['notif'], $_SESSION['notif_type']); ?>
        </div>
      <?php endif; ?>

      <form method="post" action="send_reset_link.php">
        <div class="input-group">
          <i class="fas fa-envelope"></i>
          <input type="email" name="email" placeholder="Masukkan Email Anda" required>
        </div>
        <button type="submit">Kirim Link Reset</button>
      </form>
      <p><a href="login.php">Kembali ke Login</a></p>
    </div>
  </div>
</body>
</html>
