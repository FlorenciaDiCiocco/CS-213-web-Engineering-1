<?php

   //  This function reads the form "query string"
   //
   // This function handles both an http "get".

$FN = $_GET['FN'];
$LN = $_GET['LN'];
$Adress = $_GET['Adress'];
$Phone = $_GET['Phone'];
$checkboxs = $_GET['checkboxs'];
$Total = $_GET['Total'];
$card = $_GET['card'];
$exp_date = $_GET['exp_date'];

?>
<!DOCTYPE html>
<html lang = "en">
  
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>confirmation Form</title>
  <style>
          h3{
            background-color: black;
            color:white;
            padding: 10px;
            font-weight: bold;
            font-size: larger;
          }
          h5{
              padding:5px;
              font-size:medium;
          }
          br{
            margin:5px; 
          }
      </style>
</head>
  <body>
    <h3 >This is a confirmation page</h3>
    <h5>Please read the following information and make sure it's correct before proceding with the purchase</h5>
    <p>
      <?php
         print "Your first name: $FN<br />";
         print "Your last name: $LN<br />";
         print "Your Adress: $Adress<br />";
         print "Your Phone: $Phone<br />";
         ?>
    </p>
      
    <?php
         print "product choosen:";
         print "<ul>"; 
         foreach  ($checkboxs as $product){
             if ($product=="Three stripes bag"){
                print "<li>$product and the price is $1</li>";
             }else if ($product=="Purple bag"){
                print "<li>$product and the price is $2</li>";
             }else if ($product=="Yellow bag"){
                print "<li>$product and the price is $3</li>";
             }else{
                print "<li>$product and the price is $4</li>";
             }  
         }
         print "</ul>";
         print "The total is: $Total<br />";
         print "Your card type is: $card<br />";
         print "And the expiration date is: $exp_date<br />";
      ?>
   </p>

   <form id="myForm" action="assign11_a.php" method="GET">
        
        <button type="submit" class="registerbtn"  name="Submit">Confirm purchase</button>
   
        <button type="submit" class="registerbtn"  name="Cancel">Cancel purchase</button>

   </form>
<?php


?>


</body>
</html>
