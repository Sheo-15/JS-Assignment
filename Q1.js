function runCode1(){

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function hasZero(x) {
    return x.toString().includes('0');
}

let L = parseInt(prompt("Enter L (start of range):"));
let R = parseInt(prompt("Enter R (end of range):"));
let K = parseInt(prompt("Enter K (divisor):"));

let count = 0;

for (let x = L; x <= R; x++) {
    if (x % K === 0 && !hasZero(x)) {
        let sum = 0;
        let temp = x;

        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }

        if (isPrime(sum)) count++;
    }
}

alert("Count of valid numbers: " + count);
}