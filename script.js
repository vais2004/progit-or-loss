var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr  = currentPrice.value;

    calculateProfitAndLoss(ip, qty, curr);
}



function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss / initial)*100;

        console.log('hey the loss is${loss} and the percent is ${lossPercent}%');
    }
    else if(current > initial){
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit / initial)*100;

        console.log('hey the profit is${profit} and the percent is ${profitPercent}%');
    }
    else{
        console.log('no pain no gain and no gain no pain');
    }
}

calculateProfitAndLoss(100, 10, 10);
calculateProfitAndLoss(10, 10, 100);
calculateProfitAndLoss(10, 10, 10);

