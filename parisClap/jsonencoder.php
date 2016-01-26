<?php
$postdata = file_get_contents("php://input");
file_put_contents("newFilms.json",json_encode($postdata));
?>