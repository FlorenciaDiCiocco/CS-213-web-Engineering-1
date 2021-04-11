<?php

$json = file_get_contents('php://input');
//the file
$fileName = 'data/data.txt';

//If I have to save a new student:
if ($json!=NULL){
    //save the input
    file_put_contents($fileName, $json."SOMETHINGNOTREPEATABLE", FILE_APPEND);
}   
//now we get everything out of the file if there ever was one

if (file_exists($fileName)){
    $file = fopen($fileName, "r");
    $stack = array();
    $all= file_get_contents($fileName);
    $pieces = explode("SOMETHINGNOTREPEATABLE", $all);
    foreach($pieces as $line){
        $obj = json_decode($line);
        array_push($stack, $obj);
    }
    $stack= json_encode($stack);
    fclose($file);
}else{
    $stack=NULL;
}

echo $stack;

?>