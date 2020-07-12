// login 
document.getElementById("login").addEventListener("click", function() {
    document.getElementById("login-area").style.display = "none"
    document.getElementById("transaction-area").style.display = "block"

})

// depositBtn
const depositBtn = document.getElementById("addDeposit")
depositBtn.addEventListener("click", function() {
    const depositAmount = document.getElementById("depositAmount").value
    const depositNumber = parseFloat(depositAmount)


    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit
    // current-balance
    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber + depositNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;
    document.getElementById("depositAmount").value = " "
    updateSpanText("currentDeposit", depositNumber)
    updateSpanText("currentBalance", depositNumber)

    function updateSpanText(id, depositNumber) {
        const currentAmount = document.getElementById(id).innerText;
        const currentNumber = parseFloat(currentAmount);
        const totalAmount = currentNumber + depositNumber
        document.getElementById(id).innerText = totalAmount;
    }
    // const currentBalance = document.getElementById("currentbalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance)
    // const totalBalance = currentBalanceNumber + currentDepositNumber;
    // document.getElementById("current-balance").innerText = totalBalance;
    // document.getElementById("depositAmount").value = " "
})