function reverse(n) {
    let reversedNumber = parseInt(n.toString().replace('-', '').split('').reverse().join(''));

    return reversedNumber;
}

module.exports = reverse;