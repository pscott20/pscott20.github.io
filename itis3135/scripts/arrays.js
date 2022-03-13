window.onclick = function()
{
    document.getElementById("display-results").onclick = displayResults;
}

const person = ["Rick Rambus", "Jenny Doe", "Stumpy Doe", "Luke Doe", "John Majors", "Papa Muntz", "Ted Muntz"];
const salary = [3100, 2900, 2500, 2000, 20000, 9000, 5000];

function addSalary()
{
    //TODO
}

function displayResults()
{
    var sum = 0;
    var averageSalary;

    //TODO get average salary
    for(var i = 0; i < salary.length; i++)
    {
        sum += salary[i];
        averageSalary = sum / salary.length;
    }
    
    //TODO get highest salary
    for(i = 0; i < salary.length; i++)
    {
        var currentSalary = salary[i];
        var previousSalary = salary[i-1];
        if (currentSalary > previousSalary)
        {
            highestSalary = currentSalary;
        }
    }

    //TODO display results (divide them) in the div element with "results" as the id
    
}

function displaySalary()
{
    //TODO
}

