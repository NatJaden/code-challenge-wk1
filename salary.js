//Prompts the user to enter their Basic salary and their benefits
const basicSalary = parseInt("10000");
const benefits = parseInt("500");

//Calculates gross salary
let grossSalary = basicSalary + benefits;

const taxRate = 0.1;

// Calculates the tax
let tax = grossSalary * taxRate;

let nhifDeductions = 750;

let nssfDeductions = 1000;

// Adds up all the deductions
let deductions = tax + nhifDeductions + nssfDeductions;
// Calculates net salary
let netSalary = grossSalary - deductions;

//Prints out all the necessary info
console.log(`Tax: ${tax}`);
console.log(`NHIF Deductions: ${nhifDeductions}`);
console.log(`NSSF Deductions: ${nssfDeductions}`);
console.log(`Gross Salary: ${grossSalary}`);
console.log(`Net Salary: ${netSalary}`);
