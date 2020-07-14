function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber);
    
}

function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!")
    } else if (amountNumber < 1) {
        alert("Minimum egy terméket kell vásárolnia");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}

// child element

let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

parent.removeChild(helpText);


// windows event onclick


/* 
let sendButton = document.querySelector("form .btn.btn-primary");
sendButton.onclick = function() {
    alert("Helloka");
}
*/
let sendButton = document.querySelector("form .btn.btn-primary");
sendButton.addEventListener("click", function () {
    alert("Helloka");
});

window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth);
});