function calculateAffordability() {
    let grossIncome = document.getElementById("grossIncome").value;
    let debtPayment = document.getElementById("debtPayment").value;
    let downPayment = document.getElementById("downPayment").value;
    let downPaymentType = document.getElementById("downPaymentType").value;
    let term = document.getElementById("term").value;
    let interestRate = document.getElementById("interestRate").value;

    if (downPaymentType == "percent") {
        downPayment = grossIncome * downPayment / 100;
    }

    let loanAmount = grossIncome * 3 - debtPayment - downPayment;
    let monthlyPayment = loanAmount * ((interestRate / 1200) / (1 - Math.pow(1 + (interestRate / 1200), -term * 12)));
    let affordability = (monthlyPayment / grossIncome) * 100;

    document.getElementById("affordability").innerHTML = "You can afford a monthly payment of $" + monthlyPayment.toFixed(2) + " (" + affordability.toFixed(2) + "% of your gross income).";
}