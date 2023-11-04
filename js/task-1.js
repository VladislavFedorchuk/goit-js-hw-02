function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = (quantity * pricePerDroid)
    if (totalPrice<=customerCredits) {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`
    }
    else if (totalPrice>customerCredits) {
        return("Insufficient funds!")
    }
}
console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000));
console.log(makeTransaction(10, 5000, 27000)); 
console.log(makeTransaction(50, 700, 305000));