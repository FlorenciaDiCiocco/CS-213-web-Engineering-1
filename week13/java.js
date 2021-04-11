function validatePerformance() {
    var choice = document.getElementById("performance").value;

    if (choice == "choose") {
        document.getElementById("performance_warning").innerHTML = "This field is mandatory";
        return false;
    } else {
        document.getElementById("performance_warning").innerHTML = "";
        if (choice == "duet") {
            document.getElementById("second").style.display = "block";
        } else {
            document.getElementById("second").style.display = "none";
        }

        return true;
    }

}

function validateName() {
    if (!document.getElementById("first_name").value) {
        document.getElementById("FN_warning").innerHTML = "This field is mandatory";
        return false;

    } else {
        document.getElementById("FN_warning").innerHTML = "";
        return true;
    }
}

function validateLastName() {
    if (!document.getElementById("last_name").value) {
        document.getElementById("LN_warning").innerHTML = "This field is mandatory";
        return false;
    } else {
        document.getElementById("LN_warning").innerHTML = "";
        return true;
    }
}

function validateStudentID() {
    //VALIDATE id
    //If it's empty
    if (!document.getElementById("student_id").value) {
        document.getElementById("StudentID_warning").innerHTML = "This field is mandatory";
        return false;
    } else if (isNaN(document.getElementById("student_id").value)) {
        document.getElementById("StudentID_warning").innerHTML = "This field must be a number";
        return false;
    } else {
        document.getElementById("StudentID_warning").innerHTML = "";
        return true;
    }
}

//fOR SECOND STUDENT

function validateName2() {
    if (!document.getElementById("first_name_2").value) {
        document.getElementById("FN_warning2").innerHTML = "This field is mandatory";
        return false;

    } else {
        document.getElementById("FN_warning2").innerHTML = "";
        return true;
    }
}

function validateLastName2() {
    if (!document.getElementById("last_name_2").value) {
        document.getElementById("LN_warning2").innerHTML = "This field is mandatory";
        return false;
    } else {
        document.getElementById("LN_warning2").innerHTML = "";
        return true;
    }
}

function validateStudentID2() {
    //VALIDATE id
    //If it's empty
    if (!document.getElementById("student_id_2").value) {
        document.getElementById("StudentID_warning2").innerHTML = "This field is mandatory";
        return false;
    } else if (isNaN(document.getElementById("student_id_2").value)) {
        document.getElementById("StudentID_warning2").innerHTML = "This field must be a number";
        return false;
    } else {
        document.getElementById("StudentID_warning2").innerHTML = "";
        return true;
    }
}

function validateSkill() {
    var choice = document.getElementById("skill").value;

    if (choice == "choose") {
        document.getElementById("skill_warning").innerHTML = "This field is mandatory";
        return false;
    } else {
        document.getElementById("skill_warning").innerHTML = "";
        return true;
    }

}

function validateInstrument() {
    var piano = document.getElementById("piano").checked;
    var voice = document.getElementById("voice").checked;
    var string = document.getElementById("string").checked;
    var organ = document.getElementById("organ").checked;
    var other = document.getElementById("other").checked;


    if (piano || voice || string || organ || other) {
        document.getElementById("instrument_warning").innerHTML = "";
        return true;
    } else {
        document.getElementById("instrument_warning").innerHTML = "You must choose an instrument";
        return false;
    }
}

function validatetimeLocation() {
    var choice = document.getElementById("location").value;

    if (choice == "choose") {
        document.getElementById("location_warning").innerHTML = "This field is mandatory";
        return false;
    } else {
        document.getElementById("location_warning").innerHTML = "";
        return true;
    }
}

function validateRoom() {
    //VALIDATE room#
    //If it's empty
    if (!document.getElementById("room").value) {
        document.getElementById("room_warning").innerHTML = "This field is mandatory";
        return false;
    } else if (isNaN(document.getElementById("room").value)) {
        document.getElementById("room_warning").innerHTML = "This field must be a number";
        return false;
    } else {
        document.getElementById("room_warning").innerHTML = "";
        return true;
    }
}

function validatetime_slot() {
    var choice = document.getElementById("time_slot").value;

    if (choice == "choose") {
        document.getElementById("time_warning").innerHTML = "This field is mandatory";
        return false;
    } else {
        document.getElementById("time_warning").innerHTML = "";
        return true;
    }

}

function clearing() {
    //clears all text fields and sets focus to the first field in the form. 
    document.getElementById("performance_warning").innerHTML = "";
    document.getElementById("FN_warning").innerHTML = "";
    document.getElementById("LN_warning").innerHTML = "";
    document.getElementById("StudentID_warning").innerHTML = "";
    document.getElementById("FN_warning2").innerHTML = "";
    document.getElementById("LN_warning2").innerHTML = "";
    document.getElementById("StudentID_warning2").innerHTML = "";
    document.getElementById("skill_warning").innerHTML = "";
    document.getElementById("instrument_warning").innerHTML = "";
    document.getElementById("location_warning").innerHTML = "";
    document.getElementById("room_warning").innerHTML = "";
    document.getElementById("time_warning").innerHTML = "";
    document.getElementById("performance").focus();

}

function registerStudent() {
    var Performance = false;
    var Name = false;
    var LastName = false;
    var StudentID = false;
    var Name2 = false;
    var LastName2 = false;
    var StudentID2 = false;
    var Skill = false;
    var Instrument = false;
    var timeLocation = false;
    var Room = false;
    var time_slot = false;

    Performance = validatePerformance();
    Name = validateName();
    LastName = validateLastName();
    StudentID = validateStudentID();
    if (document.getElementById("performance").value !== "duet") {
        Name2 = true;
        LastName2 = true;
        StudentID2 = true;
    } else {
        Name2 = validateName2();
        LastName2 = validateLastName2();
        StudentID2 = validateStudentID2();
    }
    Skill = validateSkill();
    Instrument = validateInstrument();
    timeLocation = validatetimeLocation();
    Room = validateRoom();
    time_slot = validatetime_slot();

    if (Performance && Name && LastName && StudentID && Name2 && LastName2 && StudentID2 && Skill && Instrument && timeLocation && Room && time_slot) {
        buildJson();
    }
}

function buildJson() {
    var dict = {};
    var instrument = [];
    if (document.getElementById("piano").checked) {
        instrument.push("piano");
    }
    if (document.getElementById("voice").checked) {
        instrument.push("voice");
    }
    if (document.getElementById("string").checked) {
        instrument.push("string");
    }
    if (document.getElementById("organ").checked) {
        instrument.push("organ");
    }
    if (document.getElementById("other").checked) {
        instrument.push("other");
    }


    var dict = {
        "performance": document.getElementById("performance").value,
        "first_name": document.getElementById("first_name").value,
        "last_name": document.getElementById("last_name").value,
        "student_id": document.getElementById("student_id").value,
        "first_name_2": document.getElementById("first_name_2").value,
        "last_name_2": document.getElementById("last_name_2").value,
        "student_id_2": document.getElementById("student_id_2").value,
        "skill": document.getElementById("skill").value,
        "instrument": instrument,
        "location": document.getElementById("location").value,
        "room": document.getElementById("room").value,
        "time_slot": document.getElementById("time_slot").value
    };

    var str_json = JSON.stringify(dict)
    CallAjax(str_json);
}

function CallAjax(query) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            resulting=this.responseText;
            resulting=resulting.replace("},null","}");
            my_string = JSON.parse(resulting);
            displayTable(my_string);
        }
    };
    xhttp.open("POST", "assign13.php", true);
    xhttp.send(query);
}


function firstload(query) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            resulting=this.responseText;
            resulting=resulting.replace("},null","}");
            my_string = JSON.parse(resulting);
            displayTable(my_string);
        }
    };
    xhttp.open("POST", "assign13.php", true);
    xhttp.send(query);
}

function displayTable(student) {
    var i;
    let table = "<tr><th>Performance</th><th>First Name</th><th>Last Name</th><th>Student ID</th><th>First Name 2</th><th>Last Name 2</th><th>Student ID 2</th><th>Skill</th><th>Instrument</th><th>Location</th><th>Room</th><th>Time Slot</th></tr>";
    for(i=0; i<student.length;i++){
        table+="<tr><td>"+student[i].performance+"</td><td>"+student[i].first_name+"</td><td>"+student[i].last_name+"</td><td>"+student[i].student_id+"</td><td>"+student[i].first_name_2+"</td><td>"+student[i].last_name_2+"</td><td>"+student[i].student_id_2+"</td><td>"+student[i].skill+"</td><td>"+student[i].instrument+"</td><td>"+student[i].location+"</td><td>"+student[i].room+"</td><td>"+student[i].time_slot+"</td></tr>";
    }
    document.getElementById("the_table").innerHTML = table;


}