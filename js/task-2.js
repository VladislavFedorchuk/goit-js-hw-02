
function formatMessage(message, maxLength) {
    let stringLength = message.length;
    if (stringLength <= maxLength) {
       return message
    } else {
        let stringSlise = message.slice(0, maxLength)
        return(`${stringSlise}...`)
    }
    
}
console.log(formatMessage("Curabitur ligula sapien",16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 45));
console.log(formatMessage("GoIt its best platform for the teaching", 39));
console.log(formatMessage("GoIt its best platform for the teaching", 13));
