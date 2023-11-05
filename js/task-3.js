function checkForSpam(message) {
    const normalizedMessage = message.toLowerCase()
    if (normalizedMessage.includes("spam")||normalizedMessage.includes("sale")) {
        return true
    } else  {
        return false
    }
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
console.log(checkForSpam("Have a nise good day sir "));
console.log(checkForSpam("im a not spam pleese dont delete me "));
console.log(checkForSpam("just a mesenge "));
console.log(checkForSpam("im warning you dont sale bitcoin in 2011 "));

