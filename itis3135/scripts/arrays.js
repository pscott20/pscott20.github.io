const person = ["Rick Rambus", "Jenny Doe", "Stumpy Doe", "Luke Doe", "John Majors", "Papa Muntz", "Ted Muntz"];
const salary = [3100, 2900, 2500, 2000, 20000, 9000, 5000];

const resultsButton = document.getElementById("display-results") //testing
        resultsButton.addEventListener('click', displayResults) //testing

function addSalary()
{
    //TODO
}

function displayResults()
{
    var sum = 0;
    var averageSalary;

    //Derive the average salary of array
    for(var i = 0; i < salary.length; i++)
    {
        sum += salary[i];
        averageSalary = sum / salary.length;
    }
    
    //Derive the highest salary of array
    for(i = 0; i < salary.length; i++)
    {
        var currentSalary = salary[i];
        var previousSalary = salary[i-1];
        if (currentSalary > previousSalary)
        {
            highestSalary = currentSalary;
        }
    }

    //highest_salary.innerHTML = "Test"; 

    //TODO display results (divide them) in the div element with "results" as the id
    //add nodes to the DOM with the heading as an h2 element and the average and highest as <p> elements. 
    //The easiest way to do that is to use the innerHTML property as shown in figure 6-13 in your Murach’s book.
    
    //Event listener syntax (freeCodeCamp)
    //element.addEventListener(event, function, booleanValue);

    //element.addEventListener("click", function(){id.style.background = "Changes"});
    //element.onClick = function(){id.style.background = "Changes"}); 

    //resultsButton.addEventListener('click', function master(){ //testing
        //var master = document.getElementsByClassName("master2"); //testing
        //master[2].innerHTML = 'i need a job'; //testing
    //}) //testing
    console.log(highestSalary);
}

function displaySalary()
{
    //TODO
}

