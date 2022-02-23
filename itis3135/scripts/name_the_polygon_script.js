window.onclick = function()
{
    document.getElementById("submitButton").onclick = getShape;
    //document.getElementById("submitButton").onclick = validateEntry;
    document.getElementById("resetButton").onclick = resetEntry;
}

function validateEntry()
{
    if (numberEntered > 21 || numberEntered == 0)
    {
        var numberEntered = document.getElementById("userPrompt").value;
        alert("Oops! You entered " + numberEntered + ". Please enter a value between 1 and 20");
    }
    if (numberEntered < 0)
    {
        var absoluteNumber = Math.abs(numberEntered);
        alert("Your number was converted to a positive value"); 
    }
    
}

//Function that takes in number of sides as a parameter and returns the polygon name.
function getShape()
{
    var numberEntered = document.getElementById("userPrompt").value;

    //Check if the number is within the limits
    if (numberEntered < 21)
    {
        if(numberEntered < 0)
        {
            var absoluteNumber = Math.abs(numberEntered);
            alert("Your number was converted to a positive value"); 
        }
        else if(numberEntered == 1)
        {
            var polygon = "hena";
            var output = "The corresponding polygon is called a " + polygon + "gon.";
            document.getElementById('output').innerHTML = output;  
        } 
        else if(numberEntered == 2)
        {
            var polygon = "di";
            var output = "The corresponding polygon is called a " + polygon + "gon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 3)
        {
            var polygon = "tri";
            var output = "The corresponding polygon is called a " + polygon + "gon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 4)
        {
            var polygon = "tetra";
            var output = "The corresponding polygon is called a " + polygon + "gon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 5)
        {
            var polygon = "penta";
            var output = "The corresponding polygon is called a " + polygon + "gon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 6)
        {
            var polygon = "hexa";
            var output = "The corresponding polygon is called a " + polygon + "gon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 7)
        {
            var polygon = "hepta";
            var output = "The corresponding polygon is called a " + polygon + "gon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 8)
        {
            var polygon = "octa";
            var output = "The corresponding polygon is called a " + polygon + "gon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 9)
        {
            var polygon = "ennea";
            var output = "The corresponding polygon is called a " + polygon + "gon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 10)
        {
            var polygon = "deca";
            var output = "The corresponding polygon is called a " + polygon + "gon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 11)
        {
            var polygon = "hen";
            var output = "The corresponding polygon is called a " + polygon + "decagon.";
            document.getElementById('output').innerHTML = output;  
        } 
        else if(numberEntered == 12)
        {
            var polygon = "do";
            var output = "The corresponding polygon is called a " + polygon + "decagon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 13)
        {
            var polygon = "tri";
            var output = "The corresponding polygon is called a " + polygon + "decagon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 14)
        {
            var polygon = "tetra";
            var output = "The corresponding polygon is called a " + polygon + "decagon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 15)
        {
            var polygon = "penta";
            var output = "The corresponding polygon is called a " + polygon + "decagon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 16)
        {
            var polygon = "hexa";
            var output = "The corresponding polygon is called a " + polygon + "decagon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 17)
        {
            var polygon = "hepta";
            var output = "The corresponding polygon is called a " + polygon + "decagon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 18)
        {
            var polygon = "octa";
            var output = "The corresponding polygon is called a " + polygon + "decagon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 19)
        {
            var polygon = "ennea";
            var output = "The corresponding polygon is called a " + polygon + "decagon.";
            document.getElementById('output').innerHTML = output;  
        }
        else if(numberEntered == 20)
        {
            var polygon = "icos";
            var output = "The corresponding polygon is called a " + polygon + "agon.";
            document.getElementById('output').innerHTML = output;  
        }
    } 
    else
    {
        var numberEntered = document.getElementById("userPrompt").value;
        alert("Oops! You entered " + numberEntered + ". Please enter a value between 1 and 20");
    }
}

//Function to reset the form
function resetEntry()
{
    document.getElementById("polygon_form").reset;
    var output = " ";
    document.getElementById('output').innerHTML = output; 
}
