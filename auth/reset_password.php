<?php
include_once(__DIR__ . '/../config/db.php');

if (!isset($_GET['token'])) {
  echo "Token tidak tersedia!";
  exit;
}

$token = $_GET['token'];

// Cek token valid & belum expired
$query = mysqli_query($conn, "SELECT * FROM users WHERE reset_token = '$token' AND reset_expires > NOW()");
if (mysqli_num_rows($query) == 0) {
  echo "Link tidak valid atau sudah kedaluwarsa!";
  exit;
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Reset Password</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <div class="form-box">
      <h2>Reset Password Baru</h2>
      <form method="post" action="reset_password_process.php">
        <input type="hidden" name="token" value="<?= htmlspecialchars($token) ?>">
        <input type="password" name="new_password" placeholder="Password Baru" required>
        <input type="password" name="confirm_password" placeholder="Konfirmasi Password" required>
        <button type="submit">Simpan Password Baru</button>
      </form>
    </div>
  </div>
</body>
</html>
