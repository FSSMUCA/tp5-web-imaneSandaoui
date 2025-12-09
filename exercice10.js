
function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}
function sommeRecursive(n) {
    if (n <= 1) {
        return n;
    }
    return n + sommeRecursive(n - 1);
}


console.log("Somme itérative (1 à 10):", sommeIterative(10)); // 55
console.log("Somme récursive (1 à 10):", sommeRecursive(10)); // 55


console.log("\n=== ANALYSE ===");
console.log("1. La version itérative est souvent plus lisible pour les débutants,");
console.log("   car elle suit un flux linéaire simple à comprendre.");
console.log("\n2. La version itérative est généralement plus performante,");
console.log("   car elle n'a pas la surcharge des appels de fonction récursifs.");
console.log("\n3. La récursion peut poser des problèmes :");
console.log("   - Stack overflow pour des valeurs trop grandes");
console.log("   - Consommation mémoire plus importante");
console.log("   - Plus difficile à déboguer parfois");
console.log("\n4. Privilégier une boucle quand :");
console.log("   - On traite de grandes quantités de données");
console.log("   - La performance est critique");
console.log("   - On veut éviter les risques de stack overflow");
console.log("   - Le code doit être maintenu par d'autres développeurs");