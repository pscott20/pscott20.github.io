const enterNumber = document.getElementById('enterNumber');
const submitButton = document.getElementById('submitButton');
const output = document.getElementById('output');

enterNumber.addEventListener("keyup", () => { //Set the buttons to disabled until a value is entered in the form.
    submitButton.disabled = resetButton.disabled = !enterNumber.value; 
});

submitForm = (e) => {
    let polygon = "hena";
    e.preventDefault(); //Prevents the form from submitting to a new page with the form properties as query parameters.
    if(enterNumber.value < 0)
    {
        absoluteNumber = Math.abs(enterNumber.value);
        output.innerText = `The number was converted to a positive number: ${absoluteNumber}.`; 
    }else if(enterNumber.value == 1)
    {
        output.innerText = `The corresponding polygon is called a ${polygon}gon.`;
    }else if(enterNumber.value == 2)
    {
        polygon = "di";
    }else if(enterNumber.value == 3)
    {
        polygon = "tri";
    }
    else if(enterNumber.value == 4)
    {
        polygon = "tetra";
    }
    else if(enterNumber.value == 5)
    {
        polygon = "penta";
    }
    else if(enterNumber.value == 6)
    {
        polygon = "hexa";
    }
    else if(enterNumber.value == 7)
    {
        polygon = "hepta";  
    }
    else if(enterNumber.value == 8)
    {
        polygon = "octa";
    }
    else if(enterNumber.value == 9)
    {
        polygon = "ennea";
    }
    else if(enterNumber.value == 10)
    {
        polygon = "deca";
    }
    else if(enterNumber.value == 11)
    {
        polygon = "hen";
    } 
    else if(enterNumber.value == 12)
    {
        polygon = "do";  
    }
    else if(enterNumber.value == 13)
    {
        polygon = "tri";
    }
    else if(enterNumber.value == 14)
    {
        polygon = "tetra";
    }
    else if(enterNumber.value == 15)
    {
        polygon = "penta"; 
    }
    else if(enterNumber.value == 16)
    {
        polygon = "hexa";
    }
    else if(enterNumber.value == 17)
    {
        polygon = "hepta"; 
    }
    else if(enterNumber.value == 18)
    {
        polygon = "octa";
    }
    else if(enterNumber.value == 19)
    {
        polygon = "ennea";
    }
    else if(enterNumber.value == 20)
    {
        polygon = "icos";
    }
    
    if (enterNumber.value < 1)
    {
        enterNumber.value = Math.abs(enterNumber.value);
        absoluteNumberOutput.innerText = `The number was converted to a positive number: ${enterNumber.value}.`; 
    }

    if(enterNumber.value > 10 && enterNumber.value < 20) 
    {
        output.innerText = `The corresponding polygon is called a ${polygon}decagon.`;
    } 
    else if(enterNumber.value > 0 && enterNumber.value < 11 || enterNumber.value == 20)
    {
        output.innerText = `The corresponding polygon is called a ${polygon}gon.`;   
    }
    else if(enterNumber.value > 20)
    {
        output.innerText = "Error, please enter a number from 1 and 20";
    }
}

//Function to reset the form
function resetForm(event)
{
    location.reload();
}


