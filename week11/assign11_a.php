<!DOCTYPE html>
<html lang = "en">
  
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>End result</title>
  <style>
          #green{
            border: 3px green solid;
            padding: 10px;
            font-weight: bold;
            font-size: larger;
          }
          #red{
            border: 3px red solid;
            padding: 10px;
            font-weight: bold;
            font-size: larger;
          }
          
      </style>
</head>
  <body>
    
<?php

if(isset($_GET['Submit'])) { 
    echo "<p id='green'>Congratulations, the bag is on its way to your address.</p>"; 
} 
if(isset($_GET['Cancel'])) { 
    echo "<p id='red'>We are sorry to hear that you cancelled the purchase.</p>"; 
} 
?>


</body>
</html>
