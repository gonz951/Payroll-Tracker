// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
// TODO: Get user input to create and return an array of employee objects

// let employees = { 
//   firstName: "First", 
//   lastName: "Last", 
//   salary: 0
// }; 

const collectEmployees = function() {
  const employees = []
  // employee table
  //let employees = { 
    //firstName: "First", 
    //lastName: "Last", 
    //salary: 0
  //}; 
  let addEmployees = true;
  while (addEmployees) {
    const firstName = prompt("Enter employee's first name.")
    const lastName = prompt("Enter employee's last name.")
    let salary = prompt("Enter employee's salary")
  
    if (isNaN(salary)) {
      salary = 0;
    }
  
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    }
    employees.push(employee)
    addEmployees = confirm("Do you want to add another employee?")
    console.log(employees)
    
  }
  return(employees);
  // while function to add employee info 
  // while (addEmployees) {
  //   let firstName = window.prompt("Enter FIRST name.");
  //   console.log(firstName);
  //   // can close the window at any time 
  //     if (!firstName) {
  //      return;
  //     }
  //   let lastName = window.prompt("Enter LAST name.");
  //   console.log(lastName);
  //     if (!lastName) {
  //       return;
  //     }
  //   let salary = window.prompt("Enter Salary (no special symbols).");
  //     if (!salary) {
  //       return;
  //     }
  //     console.log(salary);
  //     //employees.sort((a, b) => a.firstName - b.lastName);
  //     // ??
      
  //   addEmployees = window.confirm("add another employee?");
  //   //return(employees);
  //   // is this even correct

  // }
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i].salary;
  }
  // console.log(sum);
  const avg = (sum / employeesArray.length)
  console.log(`The average of all the employees is ${avg}!`);
  // return avg;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  console.log(employeesArray);
  console.log(Math.random());
  console.log(employeesArray[0])
  console.log(employeesArray.length)
  // let randomNumber = (employeesArray[i]);
  // employeesArray[randomNumber]
  //randomNumber= Rounded down Math.Random times the lenght of the array. 
  //(Which means the index will exsits in the array)
  //return Math.floor(Math.random(employeesArray[i].firstName) * employeesArray.length)
  let i = 0

  const randomNumber = Math.floor(Math.random(employeesArray[i]))
  const randomEmployee = (randomNumber.firstName * employeesArray.length)
  console.log(randomNumber)
  console.log(randomEmployee)
  //let randomNumber = Math.floor(Math.random * employeesArray.length)
  
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