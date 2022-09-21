

function getInputValue(inputId){
    const inputBox = document.getElementById(inputId);
    const inputAmount = parseFloat(inputBox.value);

    if(isNaN(inputAmount) || inputAmount < 0){
       return alert('please provide a positive value')
    }
    inputBox.value = '';
    return inputAmount;
    
}

document.getElementById('deposit-btn').addEventListener('click',function(){
    // const depositInput = document.getElementById('deposit-box');
    // const depositInputValue = parseFloat(depositInput.value);

    // if(isNaN(depositInputValue) || depositInputValue < 0){
    //     depositInput.value = '';
    //    return alert('please provide a positive value')
       
    // }
        const inputAmount = getInputValue('deposit-box')
        
        const avaiableBalance = document.getElementById('balance-field');
        const availableAmount = parseFloat(avaiableBalance.innerText)
        if(inputAmount > 0){
            avaiableBalance.innerText = availableAmount + inputAmount;
        }
       

    
    
});

function updateBalance(boxId){
    const avaiableBalance = document.getElementById('balance-field');
    const btcField = document.getElementById('btc-field');
    const ethField = document.getElementById('eth-field');
    const availableAmount = parseFloat(avaiableBalance.innerText);
    const coinAmount = getInputValue(boxId);
    if(coinAmount > 0){
        let totalExpenses;
        if(boxId == 'btc-box'){
            totalExpenses = coinAmount * 10;
            if(totalExpenses > availableAmount){
                return alert('you dont have enough money')
            }
            btcField.innerText = coinAmount;
        }else if(boxId == 'eth-box'){
            totalExpenses = coinAmount * 5;
            if( totalExpenses > availableAmount){
                return alert('you dont have enough money')
            }
            ethField.innerText = coinAmount;
    
    
        }
        avaiableBalance.innerText = availableAmount - totalExpenses;
    }
   
    
}



document.getElementById('buy-btc').addEventListener('click',function(){
    updateBalance('btc-box','btc-field')
    // const bitCoinInput = document.getElementById('btc-box');
    // const bitCoinInputValue = bitCoinInput.value;
    // const availaleBitCoin = document.getElementById('btc-field');
    // availaleBitCoin.innerText = bitCoinInputValue;
    // const bitCoinPrice = parseFloat(bitCoinInputValue) * 10
    // const avaiableBalance = document.getElementById('balance-field');
    // avaiableBalance.innerText =parseFloat( avaiableBalance.innerText) - bitCoinPrice;
    
})
document.getElementById('buy-eth').addEventListener('click',function(){ 
    updateBalance('eth-box', 'eth-field',)
    // const eatherInput = document.getElementById('eth-box');
    // const eatherInputValue = eatherInput.value;
    // const availaleEather = document.getElementById('eth-field');
    // availaleEather.innerText = eatherInputValue;
    // const eatherPrice = parseFloat(eatherInputValue) * 5
    // const avaiableBalance = document.getElementById('balance-field');
    // avaiableBalance.innerText =parseFloat( avaiableBalance.innerText) - eatherPrice;
    // eatherInput.value = '';
})