window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
 let amount = document.getElementById("loan-amount");
 amount.value= 100000;
 let years = document.getElementById("loan-years");
 years.value= 30;
 let rate = document.getElementById('loan-rate');
 rate.value = 2.5;
 update();


}

// Get the current values from the UI
// Update the monthly payment
function update() {
  currentVal = getCurrentUIValues();
  let monPayment = calculateMonthlyPayment(currentVal);
  updateMonthly(monPayment);
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  let periodicIR = (values.rate/100)/12;
  let numOfPayments = values.years * 12;
  monPay = (values.amount * periodicIR )/(1 - ((1 + periodicIR)** -numOfPayments));
  return  monPay.toFixed(2);
 
 
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
let payment = document.getElementById('monthly-payment');
payment.innerText = "$" + monthly;


}
