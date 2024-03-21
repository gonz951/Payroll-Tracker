// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
// TODO: Get user input to create and return an array of employee objects

const collectEmployees = function() {
  let addEmployees = true;
  // employee table
  const employeesArray = { 
    firstName: "First", 
    lastName: "Last", 
    salary: 0
  }; 
  // while function to add employee info 
  while (addEmployees) {
    let firstName = window.prompt("Enter FIRST name.");
    // can close the window at any time 
      if (!firstName) {
       return;
      }
    let lastName = window.prompt("Enter LAST name.");
      if (!lastName) {
        return;
      }
    let salary = window.prompt("Enter Salary (no special symbols).");
      if (!salary) {
        return;
      }
      //employees.sort((a, b) => a.firstName - b.lastName);
      // ??
      
    addEmployees = window.confirm("add another employee?");
    // is this even correct

  }
console.log(employeesArray)
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i]
  }
  return sum;
}
console.log(`Logging test ${sum}`);

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  
  
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    // ?? Figure this out
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);