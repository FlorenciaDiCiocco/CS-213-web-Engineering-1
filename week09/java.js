function displaycities() {
    //I read the country
    country = document.getElementById("countries").value;
    //I make it a file url
    country += ".txt";
    var xhttp;
    xhttp = new XMLHttpRequest();
    //I say what to do when the file is called succesfully
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    //I open the file
    xhttp.open("GET", country, true);
    xhttp.send();
}

function is_numeric(str) {
    return (str >= '0' && str <= '9');
}

function myFunction(xhttp) {
    var i, j;
    var table = "<tr><th>City</th><th> Citizen</th></tr>";
    var res_split = xhttp.responseText.split("\n");
    for (i = 0; i < res_split.length - 1; i++) {
        j = 0;
        while (!is_numeric(res_split[i][j])) {
            j++;
        }
        table += "<tr><td>" + res_split[i].slice(0, j) + "</td><td>" + res_split[i].slice(j, res_split[i].length) + "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

function displayJson() {
    //I read the filename
    filename = document.getElementById("filename").value;
    var xhttp2;
    xhttp2 = new XMLHttpRequest();
    //I say what to do when the file is called succesfully
    xhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            ParseJson(this);
        }
    };
    //I open the file
    xhttp2.open("GET", filename, true);
    xhttp2.send();
}

function parseAddress(address){
    return "city: " + address.city + ", state: " + address.state + ", zip: " + address.zip;
}

function ParseJson(xhttp) {
    var res = JSON.parse(xhttp.responseText);
    var i;
    var table = "<tr><th>Number</th><th>First</th><th>Last</th><th>Address</th><th>Major</th><th>gpa</th></tr>";
    
    for (i = 0; i < res.students.length; i++) {

        table += "<tr><td>" + i +"</td><td>" + res.students[i].first + "</td><td>" + res.students[i].last + "</td><td>" + parseAddress(res.students[i].address) + "</td><td>"+ res.students[i].major + "</td><td>"+ res.students[i].gpa + "</td></tr>";
    }

    document.getElementById("demo2").innerHTML = table;
}