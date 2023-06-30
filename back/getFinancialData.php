<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

// Hard-coded financial data (NEED TO BE CHANGED TO MYSQL QUERIES)
$data = [
    'daily' => 200,
    'monthly' => 6000,
    'yearly' => 72000
];

echo json_encode($data);
