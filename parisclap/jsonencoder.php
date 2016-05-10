<?php
$postdata = file_get_contents("php://input");
file_put_contents("newFilms.json",stripslashes(json_encode($postdata,  JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)));
?>