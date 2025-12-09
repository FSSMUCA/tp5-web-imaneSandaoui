function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}


let totalHT = Number(prompt("Entrez le total HT :"));
let remisePourcentage = Number(prompt("Entrez le pourcentage de remise :"));


let totalFinal = totalAvecRemise(totalHT, remisePourcentage);
console.log(`Total final après remise: ${totalFinal.toFixed(2)}`);