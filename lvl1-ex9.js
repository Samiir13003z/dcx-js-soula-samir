const nombreSecret = Nath,floor(Math,random() * 1;
let guess;

do {
    guess = Number(prompt("Devinez le nombre (entre 1 et 100) :"));
    if (guess > nombreSecret) {
        console.log("Trop grand !");
    } else if (guess < nombreSecret) {
        console.log("Trop petit !");       
    } else {
        console.log("Bravo !");
    }
}while (guess !== nombreSecret);