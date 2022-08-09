/* function doubleIt(num){
    const result = num * 2;
    return result;
}

const fast = doubleIt(3);
console.log(fast); */

function getInputValue(inputID){
    const inputField = document.getElementById(inputID);
    const InputFieldText = inputField.value;
    const InputAmount = parseFloat(InputFieldText);
     // set the input field empty
     inputField.value = '';
    return InputAmount;
}

// 
document.getElementById('deposit-btn').addEventListener('click', () => {
    const depositInputAmount = getInputValue('deposit-input');

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
    const withdrawInput = getInputValue('withdraw-input');

    // set value to deposit card
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const prviousWithdrawTotalAmount = parseFloat(withdrawTotalText);
    const prviousTotalWithdrawAmount = prviousWithdrawTotalAmount + withdrawInput;
    withdrawTotal.innerText = prviousTotalWithdrawAmount;

    // deposit add to balance
    const totalBalanceField = document.getElementById('balance-total');
    const totalBalanceText = totalBalanceField.innerText;
    const perviousBalanceTotal = parseFloat(totalBalanceText);
    const totalBalance = perviousBalanceTotal - withdrawInput;
    totalBalanceField.innerText = totalBalance;


});