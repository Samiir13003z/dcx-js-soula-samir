const mot = prompt("Entrez un mot :");
const motInverse = mot.split('').reverse().join('');
if (mot.toLowerCase() === motInverse.toLowerCase()) {
    console.log("C'est un palindrome");
} else {
    console.log("Ce n'est pas une palindrome.");
}