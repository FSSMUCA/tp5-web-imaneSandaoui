function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

// Test
console.log("Factorielle de 5:", factorielle(5)); // 120
console.log("Factorielle de 0:", factorielle(0)); // 1
console.log("Factorielle de 1:", factorielle(1)); // 1