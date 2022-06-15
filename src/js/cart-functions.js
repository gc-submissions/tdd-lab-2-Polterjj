function calculateChange(payment, total){
    return payment - total;
}

function isSufficientPayment(payment, total){
    if (payment >= total){
        return true;
    } else {
        return false;
    }
}

function calculateTotal (itemsArray) {
    const sum =0;
    itemsArray.forEach((item) => (sum += item.price));
    return sum;
}

function addItem (itemsArray, name, price) {}



module.exports = {calculateChange, isSufficientPayment, calculateTotal, addItem};