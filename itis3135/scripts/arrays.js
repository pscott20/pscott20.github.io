const person = ["Rick Rambus", "Jenny Doe", "Stumpy Doe", "Luke Doe", "John Majors", "Papa Muntz", "Ted Muntz"];
const salary = [3100, 2900, 2500, 2000, 20000, 9000, 5000];

//Move cursor to name input
const input = document.getElementById('enterNewEmployee');
input.setSelectionRange(0,0);
input.focus();

function addSalary()
{
    event.preventDefault(); //Stops the auto event (resetting the page) from happening
    let enterNewEmployee = document.getElementById("enterNewEmployee").value; 
    let enteredSalary = parseInt(document.getElementById("enterSalary").value); //Creates a variable with the number entered in the salary form
    if (enterNewEmployee.length != 0)
    {
        if (isNaN(enteredSalary))
        {
            alert("Error, no number entered");
        } 
            else
            {
                person.push(enterNewEmployee);
                salary.push(enteredSalary);
            }
    } 
        else 
        {
            alert("Error, no employee entered");
        }

    for (var i = 0; i < person.length; i++)
    {
        console.log(person[i]);   
    }
    for (var i = 0; i < salary.length; i++)
    {
        console.log(salary[i]);   
    }
}

function displayResults()
{
    event.preventDefault();
    var sum = 0;
    var averageSalary;

    //Derive the average salary of array
    for(var i = 0; i < salary.length; i++)
    {
        sum += salary[i];
        averageSalary = sum / salary.length;
        averageSalary = Math.round(averageSalary * 100) / 100; //Equation to round results to 2 decimal places.
        outputAverageSalary = "$"+averageSalary;
    }
    
    //Derive the highest salary of array
    for(i = 0; i < salary.length; i++)
    {
        var currentSalary = salary[i];
        var previousSalary = salary[i-1];
        if (currentSalary > previousSalary)
        {
            highestSalary = currentSalary;
            outputHighestSalary = "$" + highestSalary;
        }
    }

    document.getElementById("highest_salary").innerHTML = outputHighestSalary;
    document.getElementById("average_salary").innerHTML = outputAverageSalary;
}

function displaySalary()
{
    for (var i = 0; i < person.length; i++)
    {
        html = "<table><tr><td>" + person[i] + "</td><td>" + salary[i] + "</td></tr></table>";
        document.getElementById("results_table").innerHTML += html;
    }     
}

 

