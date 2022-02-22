window.onload = function()
{
    document.getElementById("polygon_form").onclick = submitButton;
    document.getElementById("polygon_form").reset(); //Doesn't work TODO: make work
}

function submitButton()
{
    var number = document.getElementById("number").value;
    var output = "You entered: " + number + ". "; //Testing output TODO: delete
    document.getElementById('output').innerHTML = output; //delete
}
document.getElementById('polygon_form').addEventListener('click', myFunction); //I don't think this is where this needs to be

//TODO: This function works now but I want it to work in the onload function. 
//function resetEntry()
//{
 //   document.getElementById("polygon_form").reset();
//}

