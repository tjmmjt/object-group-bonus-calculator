// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// console.log('array of employee data: ', employees);


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

for (let person of employees) {
  console.log('EMPLOYEE:\n', person); // LOOP OVER EMPLOYEES
  calculateIndividualEmployeeBonus(person);
}


// This function will calculate 1 employee's bonus! ATTICUS
//
function calculateIndividualEmployeeBonus(employee) {
  // your logic here
  let employeeBonus = {
    name: '',
    bonusPercentage: '',
    totalCompensation: '',
    totalBonus: ''
  }


  employeeBonus.name = employee.name
  // If employee gets a bonus
  if (employee.reviewRating <= 2) { // 0% bonus, checking review rating
    // console.log("Doesn't receive a bonus");
    employeeBonus.bonusPercentage = 0;
  } else if (employee.reviewRating === 3) { // 4% of base annual income, checking review rating
    employeeBonus.bonusPercentage = 0.04
    // console.log('4% bonus');
  } else if (employee.reviewRating === 4) { // 6%, checking review rating
    employeeBonus.bonusPercentage = 0.06;
    // console.log('6% bonus');
  } else if (employee.reviewRating === 5) { // 10% bonus
    employeeBonus.bonusPercentage = 0.1;
    // console.log('10% bonus');
  }

  if (employee.employeeNumber.length === 4) {  // Senior Employee add 5%
    employeeBonus.bonusPercentage += .05;
    // console.log('Senior Employee bonus Percentage:', employeeBonus.bonusPercentage);
  }

  if (employee.annualSalary > 65000) { // Minus 1% for employees making over 65k
    employeeBonus.bonusPercentage -= .01;
    // console.log('You make too much money. Minus 1% on your bonus!:', employeeBonus.bonusPercentage);
  }

  if (employeeBonus.bonusPercentage > .13) { // Capping bonuses at 13%
    employeeBonus.bonusPercentage = .13
  }

  if (employeeBonus.bonusPercentage < 0) { // Bonuses can't be negative
    employeeBonus.bonusPercentage = 0
  }

  employeeBonus.totalBonus = Math.round(employeeBonus.bonusPercentage * employee.annualSalary) // calculate Total Bonus

  employeeBonus.totalCompensation = JSON.parse(employee.annualSalary) + employeeBonus.totalBonus // calculate Total Compensation 

  console.log('BONUS INFO:', employeeBonus); // Logging Employee Bonus

  return employeeBonus


  // return new object with bonus results

}

// Test
// calculateIndividualEmployeeBonus(employees[2])