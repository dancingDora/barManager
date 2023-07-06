<?php
$command = $_POST['command'];

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
socket_connect($socket, '127.0.0.1', 7802);
socket_write($socket, $command);

$returnContent = socket_read($socket, 102400);

socket_close($socket);

echo $returnContent;
