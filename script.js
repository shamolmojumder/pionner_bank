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


    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById("currentDeposit").innerText = totalDeposit
    document.getElementById("depositAmount").value = " "
        // if (currentDepositNumber > 0) {
        //     alert("not possiable")
        // } else {


    // }


})