
function validateName(){
    if (!document.getElementById("FN").value) {
        document.getElementById("FN_warning").innerHTML = "This field is mandatory";
        return false;

    } else {
        document.getElementById("FN_warning").innerHTML = "";
        return true;
    }
}

function validateTotal(){
    if (document.getElementById("Total").value == 0) {
        document.getElementById("total_warning").innerHTML = "You must choose a product";
        return false;
    } else {
        document.getElementById("total_warning").innerHTML = "";
        return true;
    }

}
function validateLastName(){
    if (!document.getElementById("LN").value) {
        document.getElementById("LN_warning").innerHTML = "This field is mandatory";
        return false;
    } else {
        document.getElementById("LN_warning").innerHTML = "";
        return true;
    }
}

function validateAdress(){
    if (!document.getElementById("Adress").value) {
        document.getElementById("Adress_warning").innerHTML = "This field is mandatory";
        return false;
    } else {
        document.getElementById("Adress_warning").innerHTML = "";
        return true;
    }
}

function validatePhone() {
    //VALIDATE Phone number
    var number = document.getElementById("Phone").value;
    var phoneno = /\d{3}-\d{3}-\d{4}$/;
    //If it's empty
    if (!number) {
        document.getElementById("phone_warning").innerHTML = "This field is mandatory";
        return false;
    } else if (!number.match(phoneno)) {
        document.getElementById("phone_warning").innerHTML = "This field must be a number of the style  208-555-5555";
        return false;
    } else {
        document.getElementById("phone_warning").innerHTML = "";
        return true;
    }
}

function validateType(){
    if (document.getElementById("Visa").checked || document.getElementById("Mastercard").checked || document.getElementById("AE").checked) {
        
        document.getElementById("type_warning").innerHTML = "";
        return true;
    } else {
        document.getElementById("type_warning").innerHTML = "You must choose a type";
        return false;
    }
}

function validatecredit_card() {
    //VALIDATE Phone number
    var number = document.getElementById("credit_card").value;
    var cardno = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/;
    //If it's empty
    if (!number) {
        document.getElementById("credit_card_warning").innerHTML = "This field is mandatory";
        return false;
    } else if (!number.match(cardno)) {
        document.getElementById("credit_card_warning").innerHTML = "This field must be a number of the style   1111 1111 1111 1111";
        return false;
    } else {
        document.getElementById("credit_card_warning").innerHTML = "";
        return true;
    }
}

function validateDate() {
    //VALIDATE Phone number
    var number = document.getElementById("exp_date").value;
    var cardno = /\d{2}\/\d{4}$/;
    var dateParsed = number.split("/");
    //If it's empty
    if (!number) {
        document.getElementById("exp_date_warning").innerHTML = "This field is mandatory";
        return false;
    } else if (!number.match(cardno)) {
        document.getElementById("exp_date_warning").innerHTML = "This field must be a number of the style  01/2020";
        return false;
    } else if (dateParsed[0] > 12 || dateParsed[0] < 0) {
        document.getElementById("exp_date_warning").innerHTML = "Month must be between 1 and 12";
        return false;
    } else if (dateParsed[1] <= 2020) {
        document.getElementById("exp_date_warning").innerHTML = "Year must be greater than 2020";
        return false;
    } else {
        document.getElementById("exp_date_warning").innerHTML = "";
        return true;
    }
}

function total() {
    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;
    var total = 0;

    if (document.getElementById("item_0").checked) {
        one = 1;
    }
    if (document.getElementById("item_1").checked) {
        two = 2;
    }
    if (document.getElementById("item_2").checked) {
        three = 3;
    }
    if (document.getElementById("item_3").checked) {
        four = 4;
    }
    total = one + two + three + four;
    document.getElementById("Total").value = total;

    validateTotal();
}

function clearing() {
    //clears all text fields and sets focus to the first field in the form. 
    document.getElementById("FN_warning").innerHTML = "";
    document.getElementById("LN_warning").innerHTML = "";
    document.getElementById("Adress_warning").innerHTML = "";
    document.getElementById("phone_warning").innerHTML = "";
    document.getElementById("type_warning").innerHTML = "";
    document.getElementById("total_warning").innerHTML = "";
    document.getElementById("credit_card_warning").innerHTML = "";
    document.getElementById("exp_date_warning").innerHTML = "";
    document.getElementById("FN").focus();

}

function Submiting() {
    var booleanFN = false;
    var booleanLN = false;
    var booleanAdress = false;
    var booleanPhone = false;
    var booleanTotal = false;
    var booleanType = false;
    var booleanCC = false;
    var booleanDate = false;

    booleanFN=validateName();
    booleanLN=validateLastName();
    booleanAdress=validateAdress();
    booleanPhone = validatePhone();
    booleanTotal = validateTotal();
    

    booleanType = validateType();
    booleanCC = validatecredit_card();
    booleanDate = validateDate();

    //give focus
    if (!booleanFN) {
        document.getElementById("FN").focus();
    } else if (!booleanLN) {
        document.getElementById("LN").focus();
    } else if (!booleanAdress) {
        document.getElementById("Adress").focus();
    } else if (!booleanPhone) {
        document.getElementById("Phone").focus();
    } else if (!booleanTotal) {
        document.getElementById("item_0").focus();
    } else if (!booleanType) {
        document.getElementById("Visa").focus();
    } else if (!booleanCC) {
        document.getElementById("credit_card").focus();
    } else if (!booleanDate) {
        document.getElementById("exp_date").focus();
    } else {
        return true;
    }
    return false;
}