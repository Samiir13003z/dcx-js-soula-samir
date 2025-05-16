const mots = ["voiture","ordinateur","stylo","bibliothèque"];
let plusLong = mots[0];

for (let i = 1; i < mots.length; i++) {
    if (mots[i].length > plusLong.length) {
        plusLong = mots[i];
    }
}
console.log("Le mot le plus long est :", plusLong);