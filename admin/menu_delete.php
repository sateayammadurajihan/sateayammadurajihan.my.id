<?php
require '../config/db.php';

$id = $_POST['id'];
$conn->query("DELETE FROM menu WHERE id = $id");
?>
