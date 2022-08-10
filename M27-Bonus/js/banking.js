function getInputsValue(inputID){
    const inputField = document.getElementById(inputID);
    const InputFieldText = inputField.value;
    const inputFieldAmount = parseFloat(InputFieldText);
    inputField.value = '';

    return inputFieldAmount;
}

/* function getPreviousValue(inputId){
    
} */

function showInputToCard(inputId, inputFieldAmount){
    const totalInput = document.getElementById(inputId);
    const totalInputText = totalInput.innerText;
    const totalInputAmount = parseFloat(totalInputText);
    const totalAmount = totalInputAmount + inputFieldAmount;
    totalInput.innerText = totalAmount;  
}

// 
function getCurrentBalance(){
    const balanceTotalField = document.getElementById('balance-total');
    const balanceTotalText = balanceTotalField.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}

// 
function updateBalance(inputAmount, trueOrFalse){
    const balanceTotalField = document.getElementById('balance-total');
    const balanceTotalAmount = getCurrentBalance();

    if(trueOrFalse == true){
        const totalBalance = balanceTotalAmount + inputAmount;
        balanceTotalField.innerText = totalBalance;
    }
    else{
        const totalBalance = balanceTotalAmount - inputAmount;
        balanceTotalField.innerText = totalBalance;
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

document.getElementById('deposit-btn').addEventListener('click', () => {
    // get Value
    const depositInputAmount = getInputsValue('deposit-input');
    if(depositInputAmount > 0 ){
        // show deposit value to deposit card
        showInputToCard('deposit-total', depositInputAmount);
        updateBalance(depositInputAmount, true);
    }else{
        err();
    }
});
document.getElementById('withdraw-btn').addEventListener('click', () => {
    // get Value
    const withdrawInputAmount = getInputsValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawInputAmount > 0 && withdrawInputAmount < currentBalance){
        // show deposit value to deposit card
        showInputToCard('withdraw-total', withdrawInputAmount);
        updateBalance(withdrawInputAmount, false);
    }else{
        err();
    }
});