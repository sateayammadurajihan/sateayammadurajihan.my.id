<?php
require '../config/db.php';

$result = $conn->query("SELECT * FROM menu");
$rows = [];

while ($row = $result->fetch_assoc()) {
  $rows[] = $row;
}
echo json_encode($rows);
?>
