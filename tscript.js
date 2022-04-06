
var selectedrow = null;

function submitfrm()
{
event.preventDefault();
    var frmdata = readfrm();
    
    if(selectedrow === null)
    {
        insertrecord(frmdata);
    }
    else{
        update(frmdata);
    }
    reset();

}

//retrive data
function readfrm()
{
    var frmdata= {};
    frmdata["empid"] = document.getElementById("empid").value;
    frmdata["name"] = document.getElementById("name").value;
    frmdata["desig"] = document.getElementById("desig").value;
    frmdata["salary"] = document.getElementById("salary").value;
    
    return frmdata;
  
}

//insert row
function insertrecord(data)
{
   var table = document.getElementById("emplist").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.length);
   var cell1 = row.insertCell(0);
        cell1.innerHTML = data.empid;

    var cell2 = row.insertCell(1);
       cell2.innerText = data.name;

     var cell3 = row.insertCell(2);
      cell3.innerText = data.desig;

     var cell4 = row.insertCell(3);
      cell4.innerText = data.salary;

      var cell5 = row.insertCell(4);
      cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='delrow(this)'>Delete</button>`;
  
}

//editrow

function onEdit(td)
{
    selectedrow = td.parentElement.parentElement;
    document.getElementById("empid").value = selectedrow.cells[0].innerHTML;
    document.getElementById("name").value = selectedrow.cells[1].innerHTML;
    document.getElementById("desig").value = selectedrow.cells[2].innerHTML;
    document.getElementById("salary").value = selectedrow.cells[3].innerHTML;

}


function update(frmdata)
{
    selectedrow.cells[0].innerHTML = frmdata.empid;
    selectedrow.cells[1].innerHTML = frmdata.name;
    selectedrow.cells[2].innerHTML = frmdata.desig;
    selectedrow.cells[3].innerHTML = frmdata.salary;

}

//delete

function delrow(td)
{
    row = td.parentElement.parentElement;
    document.getElementById("emplist").deleteRow(row.rowIndex);
    reset();
}

function reset()
{
    document.getElementById("empid").value = '';
    document.getElementById("name").value = '';
    document.getElementById("desig").value = '';
    document.getElementById("salary").value = '';
}


