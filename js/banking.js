function getInputValue(inputID){
    const inputField = document.getElementById(inputID);
    const InputFieldText = inputField.value;
    const InputAmount = parseFloat(InputFieldText);
     // set the input field empty
     inputField.value = '';
    return InputAmount;
}

function updateTotalField(inputID, inputAmount){
    const totalAmount = document.getElementById(inputID);
    const totalAmountText = totalAmount.innerText;
    const previousTotalAmount = parseFloat(totalAmountText);

    const calculationPreviousAmount = previousTotalAmount + inputAmount;
    totalAmount.innerText = calculationPreviousAmount;
}
// balance Amount
function getCurrentBalance(){
    const totalBalanceField = document.getElementById('balance-total');
    const totalBalanceText = totalBalanceField.innerText;
    const perviousBalanceTotal = parseFloat(totalBalanceText);
    return perviousBalanceTotal;
}
// update Balance
function updateBalance(inputAmount, isAdd){
    const totalBalanceField = document.getElementById('balance-total');
    const balanceAmount = getCurrentBalance();
    
    if(isAdd == true){
        const totalBalance = balanceAmount + inputAmount;
        totalBalanceField.innerText = totalBalance;
    }
    else {  
        const totalBalance = balanceAmount - inputAmount;
        totalBalanceField.innerText = totalBalance;
    }
}

// >>>
function err(){
    const msg = document.getElementById('msg');
    msg.innerText = 'Input positive value';
    msg.style.color = 'red';
    msg.style.textAlign = 'center';
    msg.style.paddingTop = '20px';
    
}

// 
document.getElementById('deposit-btn').addEventListener('click', () => {
    const depositInputAmount = getInputValue('deposit-input');
    if(depositInputAmount > 0){   
        // set value to deposit card
        updateTotalField('deposit-total', depositInputAmount);
        // deposit add to balance
        updateBalance(depositInputAmount, true);
    }
    else{
        err();
    }
});

// withdraw
document.getElementById('withdraw-btn').addEventListener('click', () => {
    const withdrawInput = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawInput > 0 && withdrawInput < currentBalance){
        // set value to deposit card
        updateTotalField( 'withdraw-total', withdrawInput);
        // deposit add to balance
        updateBalance(withdrawInput, false);
    }else{
        err();
    }
});