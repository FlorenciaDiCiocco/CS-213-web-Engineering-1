function validatestartCity() {
    //VALIDATE start city
    var city = document.getElementById("startCity").value;
    var norm = /^[A-Za-z ]+$/;
    //If it's empty
    if (!city) {
        document.getElementById("startCity_warning").innerHTML = "This field is mandatory";
        return false;
    } else if (!city.match(norm)) {
        document.getElementById("startCity_warning").innerHTML = "This field must be a letter only";
        return false;
    } else {
        document.getElementById("startCity_warning").innerHTML = "";
        return true;
    }
}

function validatestartState() {
    //VALIDATE start State
    var state = document.getElementById("startState").value;
    var norm = /^[A-Za-z]+$/;
    //If it's empty
    if (!state) {
        document.getElementById("startState_warning").innerHTML = "This field is mandatory";
        return false;
    } else if (!state.match(norm)) {
        document.getElementById("startState_warning").innerHTML = "This field must be a letter only";
        return false;
    } else if (state.length != 2) {
        document.getElementById("startState_warning").innerHTML = "The lenght must be 2";
        return false;
    } else {
        document.getElementById("startState_warning").innerHTML = "";
        return true;
    }
}

function validateendCity() {
    //VALIDATE end city
    var city = document.getElementById("endCity").value;
    var norm = /^[A-Za-z ]+$/;
    //If it's empty
    if (!city) {
        document.getElementById("endCity_warning").innerHTML = "This field is mandatory";
        return false;
    } else if (!city.match(norm)) {
        document.getElementById("endCity_warning").innerHTML = "This field must be a letter only";
        return false;
    } else {
        document.getElementById("endCity_warning").innerHTML = "";
        return true;
    }
}

function validateendState() {
    //VALIDATE end State
    var state = document.getElementById("endState").value;
    var norm = /^[A-Za-z]+$/;
    //If it's empty
    if (!state) {
        document.getElementById("endState_warning").innerHTML = "This field is mandatory";
        return false;
    } else if (!state.match(norm)) {
        document.getElementById("endState_warning").innerHTML = "This field must be a letter only";
        return false;
    } else if (state.length != 2) {
        document.getElementById("endState_warning").innerHTML = "The lenght must be 2";
        return false;
    } else {
        document.getElementById("endState_warning").innerHTML = "";
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
    document.getElementById("startCity_warning").innerHTML = "";
    document.getElementById("startState_warning").innerHTML = "";
    document.getElementById("endCity_warning").innerHTML = "";
    document.getElementById("endState_warning").innerHTML = "";
    document.getElementById("startCity").focus();

}

function checkAndCall() {
    var booleanSC = false;
    var booleanSS = false;
    var booleanEC = false;
    var booleanES = false;

    booleanSC = validatestartCity();
    booleanSS = validatestartState();
    booleanEC = validateendCity();
    booleanES = validateendState();

    //give focus
    if (!booleanSC) {
        document.getElementById("startCity").focus();
    } else if (!booleanSS) {
        document.getElementById("startState").focus();
    } else if (!booleanEC) {
        document.getElementById("endCity").focus();
    } else if (!booleanES) {
        document.getElementById("endState").focus();
    } else {
        buildQuery();
    }
    return false;
}

function buildQuery() {

    startCity = document.getElementById("startCity").value;
    startState = document.getElementById("startState").value;
    endCity = document.getElementById("endCity").value;
    endState = document.getElementById("endState").value;

    var params = {
        startCity,
        startState,
        endCity,
        endState
    };

    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');


    loadSite(query);
}

function loadSite(query) {


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            my_string = JSON.parse(this.responseText);

            document.getElementById("miles").value = my_string.trip.miles;

            if (my_string.trip.tmode != undefined && my_string.trip.tmode != "NaN" ) {
                var i;
                var text="";
                for (i=0;i<my_string.trip.tmode.length;i++){
                    text+=my_string.trip.tmode[i] + "\n";
                }

                document.getElementById("tmode").value = text;
                document.getElementById("tmode").rows = my_string.trip.tmode.length+1;

            } else{
                document.getElementById("tmode").value = "No transportation mode was available";
            }
        }
    };
    var url = "/cgi-bin/cs213/mileageAjaxJSON" + "?" + query;

    xhttp.open("POST", url, true);
    xhttp.send();
}