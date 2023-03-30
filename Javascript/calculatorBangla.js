// --------------------- Additional Payment Calculator ---------------------------

let Form = document.querySelector('form');
let Result = document.getElementById('result');

Form.addEventListener('submit', function (event) {
    event.preventDefault();

    let LoanAmount = parseFloat(document.getElementById('loan-amount').value);
    let InterestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    let LoanTerm = parseFloat(document.getElementById('loan-term').value) * 12;
    let AdditionalPayment = parseFloat(document.getElementById('additional-payment').value) || 0;

    let LastBalance = LoanAmount;
    let InterestTotal = 0;

    for (let i = 0; i < LoanTerm; i++) {
        let PaymentMonthly = (LoanAmount + AdditionalPayment) * (InterestRate * Math.pow(1 + InterestRate, LoanTerm)) / (Math.pow(1 + InterestRate, LoanTerm) - 1);
        let InterestMonthly = LastBalance * InterestRate;
        let PrincipalMonthly = PaymentMonthly - InterestMonthly - AdditionalPayment;

        LastBalance -= PrincipalMonthly;
        InterestTotal += InterestMonthly;
    }

    let TotalPayment = LoanAmount + InterestTotal;
    let PaymentMonthly = TotalPayment / LoanTerm;

    let resultText = `মাসিক পরিশোধ: $${PaymentMonthly.toFixed(2)}<br>
                    মোট পরিশোধ: $${TotalPayment.toFixed(2)}<br>
                    মোট ইন্টারেস্ট: $${InterestTotal.toFixed(2)}`;

    Result.innerHTML = resultText;
});


// --------------------- Rent VS Buy ---------------------------
function calculate() {
    let HomePrice = parseFloat(document.getElementById("homePrice").value);
    let DownPayment = parseFloat(document.getElementById("downPayment").value);
    let BuyInterestRate = parseFloat(document.getElementById("interestRate").value);
    let BuyLoanTerm = parseFloat(document.getElementById("loanTerm").value);
    let PropertyTax = parseFloat(document.getElementById("propertyTax").value);
    let BuyInsurance = parseFloat(document.getElementById("insurance").value);
    let Rent = parseFloat(document.getElementById("rent").value);
    let RentIncrease = parseFloat(document.getElementById("rentIncrease").value);

    let Principal = HomePrice - DownPayment;
    let MonthlyBuyInterestRate = BuyInterestRate / 1200;
    let NumberOfPayments = BuyLoanTerm * 12;
    let MonthlyPayment = Principal * (MonthlyBuyInterestRate + MonthlyBuyInterestRate / ((1 + MonthlyBuyInterestRate) ** NumberOfPayments - 1));
    let PropertyTaxMonthly = PropertyTax / 1200 * HomePrice;
    let BuyInsuranceMonthly = BuyInsurance / 12;
    let TotalCostBuy = DownPayment + (MonthlyPayment + PropertyTaxMonthly + BuyInsuranceMonthly) * NumberOfPayments;
    let TotalCostRent = Rent;

    for (let i = 1; i <= NumberOfPayments / 12; i++) {
        TotalCostRent += TotalCostRent * (RentIncrease / 100);
    }

    let BuyRentResult = document.getElementById("result_buy");
    BuyRentResult.innerHTML = `ক্রয় এর মোট খরচ: $${TotalCostBuy.toFixed(2)}<br>বিক্রয় এর মোট খরচ: $${TotalCostRent.toFixed(2)}<br>${TotalCostBuy > TotalCostRent ? "আপনার ক্রয় করা উচিত ।" : "আপনার বিক্রয় করা উচিত ।"}`;
}