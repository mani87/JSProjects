function createTableRow(label, value) {
    // will create row for every element in our list

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


function createTable() {
    var table = document.createElement('table')

    // table contents
    var titles = ["Name", "Age", "DOB", "Company", "Email"];
    var values = ["Mani Kumar", 21, "04-17-1998", "Gemini Solutions Pvt. Ltd.", "mani.kumar@geminisolutions.in"];

    for(var i=0; i<titles.length; i++) {
        tr = createTableRow(titles[i], values[i]);
        table.appendChild(tr);
    }

    table.className = 'table table-bordered container bg-white';
    return table;
}


final_table = createTable()
document.body.appendChild(final_table);