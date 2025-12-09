let nombre = Number(prompt("Entrez un nombre :"));

if (nombre < 0) {
    console.log("Nombre négatif");
} else if (nombre <= 10) {
    console.log("Petit");
} else if (nombre <= 50) {
    console.log("Moyen");
} else if (nombre <= 100) {
    console.log("Grand");
} else {
    console.log("Très grand");
}