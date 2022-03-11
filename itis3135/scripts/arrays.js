const person = ["Rick Rambus", "Jenny Doe", "Stumpy Doe", "Luke Doe", "John Majors", "Papa Muntz", "Ted Muntz"];
const salary = [3100, 2900, 2500, 2000, 20000, 9000, 5000];

function addSalary()
{
    //TODO
}

function displayResults()
{
    let currentSalary;
    let previousSalary;
    let i;
    
    for(i = 0; i < salary.length; i++)
    {
        currentSalary = i;
        previousSalary = i - 1;
        if (currentSalary > previousSalary)
        {
            const highestSalary = currentSalary;
            return highestSalary;
        }
    }
    //TODO get average salary
        //while loop iterating through array
        //if(current > prev)
            //add current to variable
    //TODO get highest salary
    //TODO display results (divide them) in the div element with "results" as the id
}

function displaySalary()
{
    //TODO
}

