<?php
session_start();
if (!isset($_SESSION['user']) || $_SESSION['user']['role'] !== 'admin') {
  header("Location: ../auth/login.php");
  exit();
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Dashboard Admin - Sate Jihan</title>
  <link rel="stylesheet" href="style.css"> 
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background: #f4f4f4;
    }
    .sidebar {
      width: 220px;
      height: 100vh;
      background: #4A1D1D;
      color: white;
      position: fixed;
      padding: 20px;
    }
    .sidebar h2 {
      margin-bottom: 20px;
      font-size: 20px;
    }
    .sidebar a {
      display: block;
      color: white;
      text-decoration: none;
      margin: 10px 0;
    }
    .sidebar a:hover {
      text-decoration: underline;
    }
    .main {
      margin-left: 240px;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="sidebar">
    <h2>Admin Sate Jihan</h2>
    <a href="dashboard.php">Dashboard</a>
    <a href="menu_list.php">List Menu</a>
    <a href="menu_add.php">Tambah Menu</a>
    <a href="../auth/logout.php">Logout</a>
  </div>

  <div class="main">
    <h1>Selamat datang, <?php echo $_SESSION['user']['fullname']; ?>!</h1>
    <p>Silakan pilih menu di sidebar untuk mengelola data.</p>
  </div>
</body>
</html>
