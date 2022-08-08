/* function doubleIt(num){
    const result = num * 2;
    return result;
}

const fast = doubleIt(3);
console.log(fast); */

function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);
     // set the input field empty
     depositInput.value = '';
    return depositInputAmount;
}

// 
document.getElementById('deposit-btn').addEventListener('click', () => {
    const depositInputAmount = getInputValue();

    // set value to deposit card
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const prviousDepositTotalAmount = parseFloat(depositTotalText);
    const prviousTotalDepositAmount = prviousDepositTotalAmount + depositInputAmount;
    depositTotal.innerText = prviousTotalDepositAmount;

    // deposit add to balance
    const totalBalanceField = document.getElementById('balance-total');
    const totalBalanceText = totalBalanceField.innerText;
    const perviousBalanceTotal = parseFloat(totalBalanceText);
    const totalBalance = perviousBalanceTotal + depositInputAmount;
    totalBalanceField.innerText = totalBalance;

   
});


// withdraw
document.getElementById('withdraw-btn').addEventListener('click', () => {
    const withdrawInput = document.getElementById('withdraw-input');
    const dwithdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(dwithdrawInputText);

    // set value to deposit card
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const prviousWithdrawTotalAmount = parseFloat(withdrawTotalText);
    const prviousTotalWithdrawAmount = prviousWithdrawTotalAmount + withdrawInputAmount;
    withdrawTotal.innerText = prviousTotalWithdrawAmount;

    // deposit add to balance
    const totalBalanceField = document.getElementById('balance-total');
    const totalBalanceText = totalBalanceField.innerText;
    const perviousBalanceTotal = parseFloat(totalBalanceText);
    const totalBalance = perviousBalanceTotal - withdrawInputAmount;
    totalBalanceField.innerText = totalBalance;

    // set the input field empty
    withdrawInput.value = '';
});