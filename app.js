document.getElementById("dem0").innerHTML="Todo Application";

var list=document.getElementById("list");

function addtodo()
{
    // // create li
    var a=document.getElementById("todo");

    var li=document.createElement('li')
    var litext=document.createTextNode(a.value);


// create del btn
    var delbtn=document.createElement('button');
    var deltext=document.createTextNode("Delete");
    delbtn.setAttribute("class","btn");
    delbtn.setAttribute("onclick","deleteitem(this)")
    delbtn.appendChild(deltext);

    // create edit btn
    var editbtn=document.createElement("button");
    var edittext=document.createTextNode("Edit");
    editbtn.setAttribute("class","btn");
    editbtn.setAttribute("onclick","Edititem(this)")
    editbtn.appendChild(edittext);
    li.appendChild(editbtn);

    li.appendChild(delbtn);

    a.value="";
    list.appendChild(li);
    li.appendChild(litext);
    console.log(li)
}
function deleteitem(e)
{
    e.parentNode.remove();
}
function Edititem(e)
{
    var val=e.parentNode.firstChild.nodeValue;
    var editvalue=prompt("Enter Edit Value" , val);
    e.parentNode.firstChild.nodeValue=editvalue;
    
}



function Deleteall()
{
    list.innerHTML="";
}