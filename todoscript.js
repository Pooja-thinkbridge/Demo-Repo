const d = new Date();
var date= d.getDate();
var month=d.getMonth();
var yr= d.getFullYear();
d1=date+"-"+month+"-"+yr;
document.getElementById('date').innerHTML=d1;

var add = document.getElementById("add");
var input = document.getElementById("input");
var ul = document.getElementById("list");
var item = document.getElementsByTagName("li");

function len()
{
    return input.value.length;
}

function listlen()
{
    return item.length;
}

add.addEventListener("click",addList);
function addList()
{
    var l=len();
    if(l > 0)
    {
        create();
    }
    else
    {
        alert("Please enter some task!!!")
    }
}
function create()
{
   
        var a= document.createElement("li");
        a.appendChild(document.createTextNode(input.value));
        ul.appendChild(a);
        input.value=" ";
        

        var del = document.createElement("button");
        del.appendChild(document.createTextNode("DELETE"));
        del.addEventListener("click",dellist);
        a.appendChild(del);

        

        function dellist()
        {
            alert("Want to delete the task!!!");
           a.classList.add("delete");
        }
        
 
    }
