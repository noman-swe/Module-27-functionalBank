function getInput(fieldID){
    const input = document.getElementById(fieldID);
    const inputString = input.value;
    const inputAmount = parseFloat(inputString);
    input.value = '';
    return inputAmount;
} 

function showInputToCard(tagId, inputAmount){
    const previousTotalElement = document.getElementById(tagId);
    const previousTotalText = previousTotalElement.innerText;
    const previousTotalAmount = parseFloat(previousTotalText);
    const totalAmount = previousTotalAmount + inputAmount;

    previousTotalElement.innerText = totalAmount;
}

// 
function getCurrentBalance(){
    const balanceFIeld = document.getElementById('balance-total');
    const balanceText = balanceFIeld.innerText;
    const balanceAmount = parseFloat(balanceText);
    return balanceAmount;
}

function updateBalance(inputAmount, isAdd){
    const balanceFIeld = document.getElementById('balance-total');
    const balanceAmount = getCurrentBalance();
    if(isAdd == true){
        const totalBalance = balanceAmount + inputAmount;
        balanceFIeld.innerText = totalBalance;
    }else{
        const totalBalance = balanceAmount -inputAmount;
        balanceFIeld.innerText = totalBalance;
    }
}

// err
function err(){
    const msg = document.getElementById('msg');
    msg.innerText = 'Please input positive value';
    msg.style.color = 'red';
    msg.style.paddingTop = '20px';
}
document.getElementById('deposit-btn').addEventListener('click', ()=> {
    const depositAmount = getInput('deposit-input');
    if(depositAmount > 0){
        showInputToCard('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }else{
        err();
    }
});
document.getElementById('withdraw-btn').addEventListener('click', ()=> {
    const withdrawAmount = getInput('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance ){    
        showInputToCard('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }else{
        err();
    }
});
