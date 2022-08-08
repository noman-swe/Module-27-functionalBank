document.getElementById('deposit-btn').addEventListener('click', () => {
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);

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

    // set the input field empty
    depositInput.value = '';
});