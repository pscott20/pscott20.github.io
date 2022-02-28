window.onclick = function()
{
    document.getElementById("resetButton").onclick = resetEntry(); //C/AC button
    document.getElementById("oneButton").onclick = oneButtonPressed(); //1 button
}

//C/AC button to reset what was entered
//TODO: This doesn't work
function resetButtonPressed()
{
    document.getElementById("").reset;
    var output = " ";
    document.getElementById('output').innerHTML = output; 
}

//TODO #1: Output button hits to "screen"
function oneButtonPressed()
{
    var oneButtonOutput = "1"; //This needs to be global
    document.getElementById("oneButtonOutput").innerHTML = oneButtonOutput; 
}


//TODO #2: Function for equals button

//TODO #3: Function for addition button

//TODO #4: Function for subtraction button