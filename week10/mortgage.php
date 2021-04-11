<?php

   //  This function reads the form "query string"
   //
   // This function handles both an http "get".

$annualRate = $_GET['apr'];
$years = $_GET['term'];
$principal = $_GET['amount'];

?>
<!DOCTYPE html>
<html lang = "en">
  <meta charset = "utf-8" />
  <title>Read Form!</title>
  <head>
      <style>
          h3{
            background-color: crimson;
            padding: 10px;
            font-weight: bold;
            font-size: large;
          }
          h5{
              padding:5px;
              font-size:medium;
          }
      </style>
  </head>
  <body>
    <h3 >The values of the form elements are:</h3>
     <h5>
      <?php
         print "APR: $annualRate<br />";
         print "Term: $years<br />";
         print "Amount: $principal<br />";
      ?>
   </h5>

    <h3>The mortgage value is:</h3>
  <?php

$annualRate/=100;
$periodsPerYear=12;
$r = $annualRate / $periodsPerYear;
$p = ($principal * $r) / (1 - (1 + $r) ** (-$periodsPerYear * $years));
$p=round($p , 2);
echo  '<h5> USD     '.$p.'</h5>';
?>


</body>
</html>
