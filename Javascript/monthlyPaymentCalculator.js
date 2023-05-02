function calculateMonthlyPayment() {
    let loanAmount = document.getElementById("loanAmount").value;
    let loanTerm = document.getElementById("loanTerm").value;
    let interestRate = document.getElementById("interestRate").value;

    let monthlyPayment = loanAmount * ((interestRate / 1200) / (1 - Math.pow(1 + (interestRate / 1200), -loanTerm * 12)));

    document.getElementById("monthlyPayment").innerHTML = "You will need to pay $" + monthlyPayment.toFixed(2) + " every month in next " + loanTerm + " years.";
  }