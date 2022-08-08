document.getElementById('deposit-btn').addEventListener('click', () => {
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);

    // set value to deposit card
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    const totalDepositAmount = depositTotalAmount + depositInputAmount;
    depositTotal.innerText = totalDepositAmount;

    // set the input field empty
    depositInput.value = '';
});