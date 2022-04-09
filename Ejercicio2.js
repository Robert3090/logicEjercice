function countPrimes(number) {
    let primes = [];

    for(let i = 2; i <= number; i++) {
        let primo = true;
        for(let j=2; j < i; j++) {
            if(i%j === 0) {
                primo = !primo;
                break;
            }
        }
        if(primo) primes.push(i);
    }


    return primes.length;
}

module.exports = countPrimes;