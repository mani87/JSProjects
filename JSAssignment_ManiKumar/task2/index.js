/**
 * Validates all three fields of Employee form
 * @param {string} ename - Employee's name
 * @param {string} eemail - Employee's email address
 * @param {string} emobile - Employee's phone number
 */
function isValid(ename, eemail, emobile) {
    const re_name = /^[A-Za-z ]+$/;
    const re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re_mobile = /^[789]\d{9}$/;

    if (ename == "") {
        document.getElementById("es_name").innerHTML = "Name cannot be blank";
        return false;
    } else{
        if (!ename.match(re_name)){
            document.getElementById("es_name").innerHTML = "Invalid Name!";
            return false;
        } else{
            document.getElementById("es_name").innerHTML = "";
        }
    }

    if (eemail == "") {
        document.getElementById("es_email").innerHTML = "Email cannot be blank";
        return false;
    } else{
        if (!eemail.match(re_email)){
            document.getElementById("es_email").innerHTML = "Invalid email!";
            return false;
        } else{
            document.getElementById("es_email").innerHTML = "";
        }
    }

    if (emobile != "" && !emobile.match(re_mobile)){
        document.getElementById("es_mobile").innerHTML = "Invalid mobile number!";
        return false;
    }

    return true;
}

/**
 * Adds row to our table to display information
 * @param {string} label - Add label in table row
 * @param {string} value - Add value to corresponding label
 */
function createTableRow(label, value) {
    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var text_node1 = document.createTextNode(label);
    var text_node2 = document.createTextNode(value);
    var bold_label = document.createElement('strong');
    bold_label.appendChild(text_node1);

    td1.appendChild(bold_label);
    td2.appendChild(text_node2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    return tr;
}

/**
 * Returns the table created from employee' details object
 * @param {JSON Object} employee_details 
 */
function createTable(employee_details) {
    var table = document.createElement('table')

    console.log("Employee Data is : ", employee_details);
    console.log("Object is of type: ", typeof employee_details);

    for (x in employee_details) {
        tr = createTableRow(x, employee_details[x]);
        table.appendChild(tr);
    }

    table.className = 'table table-bordered bg-white';
    return table;
}

/**
 * Display table with Employee details
 * @param {Object} employee_details - containes employee details
 */
function showGrid(employee_details) {
    var table = createTable(employee_details);
    document.getElementsByClassName("employee_data")[0].appendChild(table);
}

/**
 * Submit details and store validated data
 */
function submitDetails() {
    var eform = document.forms["employee_form"];
    var ename = eform["name"].value;
    var eemail = eform["email"].value;
    var emobile = eform["mobile"].value;

    if (isValid(ename, eemail, emobile)) {
        var employee;
        if (emobile == ""){
            employee = {Name : ename, Email : eemail};
        } else {
            employee = {Name : ename, Email : eemail, Mobile: emobile};
        }
        
        localStorage.setItem("employee", JSON.stringify(employee)); // Store to local storage
    } else {
        return false;
    }
}

showGrid(JSON.parse(localStorage.getItem("employee")));