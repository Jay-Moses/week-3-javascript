// Declare variables of different data types
let str = "Hello, World!";
let num1 = 10;
let num2 = 5;
let isTrue = true;

// Define and call functions to perform simple operations
function add() {
    let result = num1 + num2;
    console.log("Add: " + result);
    document.getElementById("result").textContent = "Add: " + result;
}

function subtract() {
    let result = num1 - num2;
    console.log("Subtract: " + result);
    document.getElementById("result").textContent = "Subtract: " + result;
}

function multiply() {
    let result = num1 * num2;
    console.log("Multiply: " + result);
    document.getElementById("result").textContent = "Multiply: " + result;
}

function divide() {
    let result = num1 / num2;
    console.log("Divide: " + result);
    document.getElementById("result").textContent = "Divide: " + result;
}

// DOM Manipulation example with event listeners
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").addEventListener("click", function() {
        console.log("Button was clicked!");
    });

    // Initialize Chart.js
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
