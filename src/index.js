module.exports = function toReadable (number) {
    let simpleDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    let decDigit = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if ( number < 20) {
        return simpleDigit[number];
    } else if ( number < 100) {
        let a = Math.floor(number / 10);
        let b = number % 10;
        if (b === 0) {
            return decDigit[a];
        } else {
            return decDigit[a] + ' ' + simpleDigit[b];
        }
    } else if ( number < 1000) {
        let c = Math.floor(number / 100);
        let d = number % 100;
        let e = Math.floor(d / 10);
        let f = Math.floor(d % 10);
        if ( d === 0 && f === 0) {
            return simpleDigit[c] + ' ' + 'hundred';
        } else if ( d < 10 && f > 0) {
            return simpleDigit[c] + ' ' + 'hundred' + ' ' + simpleDigit[f];
        } else if ( d > 2 && f === 0) {
            return simpleDigit[c] + ' ' + 'hundred' + ' ' + decDigit[e]; 
        }  else if (d >= 10 && d < 20 ) {
            return simpleDigit[c] + ' ' + 'hundred' + ' ' + simpleDigit[d];
        }  else {
            return simpleDigit[c] + ' ' + 'hundred' + ' ' + decDigit[e] + ' ' + simpleDigit[f];
        }
    }
}
