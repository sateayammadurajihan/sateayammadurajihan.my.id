<?php
session_start();
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
  header("Location: ../auth/login.php");
  exit();
}
require '../config/db.php'; // pastikan koneksi database
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Dashboard Admin</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <button class="hamburger" onclick="toggleSidebar()">☰</button>
    <h1>Dashboard Admin</h1>
    <div class="header-links">
      <a href="../public/index.html">Lihat Website</a> |
      <a href="../auth/logout.php">Logout</a>
    </div>
  </header>

  <aside id="sidebar" class="sidebar">
    <ul>
      <li><a href="#" onclick="showForm()">➕ Tambah Menu</a></li>
      <li><a href="#" onclick="hideForm()">📋 Lihat Menu</a></li>
    </ul>
  </aside>

  <main>
    <section id="menuFormSection" style="display:none;">
      <h2>Tambah Menu</h2>
      <form id="menuForm" method="POST" action="menu_add.php">
        <input type="text" name="name" placeholder="Nama Menu" required>
        <input type="number" name="price" placeholder="Harga" required>
        <input type="text" name="image_url" placeholder="URL Gambar" required>
        <input type="text" name="detail" placeholder="Detail" required>
        <button type="submit">Tambah Menu</button>
      </form>
    </section>

    <section id="menuListSection">
      <h2>Daftar Menu</h2>
      <ul id="menuList">
        <?php
        $result = $conn->query("SELECT * FROM menu ORDER BY id DESC");
        while ($row = $result->fetch_assoc()) {
          echo '<li class="menu-item">';
          echo '<div class="menu-info">';
          echo '<img src="../public/' . $row['image_url'] . '" alt="' . $row['name'] . '" height="60">';
          echo '<div>';
          echo '<strong>' . htmlspecialchars($row['name']) . '</strong> - Rp ' . number_format($row['price'], 0, ',', '.') . '<br>';
          echo '<small>' . htmlspecialchars($row['detail']) . '</small>';
          echo '</div>';
          echo '</div>';
          echo '<div class="menu-actions">';
          echo '<a href="menu_update.php?id=' . $row['id'] . '" class="btn edit-btn">Edit</a>';
          echo '<a href="menu_delete.php?id=' . $row['id'] . '" class="btn delete-btn" onclick="return confirm(\'Hapus menu ini?\')">Hapus</a>';
          echo '</div>';
          echo '</li>';
        }
        ?>
      </ul>
    </section>
  </main>

  <script>
    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
    }
    function showForm() {
      document.getElementById('menuFormSection').style.display = 'block';
      document.getElementById('menuListSection').style.display = 'none';
    }
    function hideForm() {
      document.getElementById('menuFormSection').style.display = 'none';
      document.getElementById('menuListSection').style.display = 'block';
    }
  </script>
</body>
</html>
