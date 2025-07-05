<?php
require_once('../config/db.php');

header('Content-Type: application/json');

$menus = [];

$query = "SELECT * FROM menu ORDER BY id ASC";
$result = mysqli_query($conn, $query);

if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        $menus[] = $row;
    }
    echo json_encode($menus);
} else {
    echo json_encode([
        'error' => true,
        'message' => 'Query gagal dijalankan: ' . mysqli_error($conn)
    ]);
}
?>
