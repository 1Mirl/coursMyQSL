// page JS pour 18 exo.html

alert('Bienvenue');

let maBoite;
maBoite = prompt ('saisissez un nombre !');
console.log(maBoite);

//Un nombre est généré aléatoirement compris entre 1 et 100
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
document.getElementById("p1").innerHTML = getRndInteger(0,100);

for (let maBoite = 1; maBoite < 100; maBoite++) {
    if(maBoite === getRndInteger ){
        text += "perdu ";
        document.getElementById("p2").innerHTML = text;   
    }else if((maBoite > getRndInteger) || (maBoite < getRndInteger)){
        document.getElementById("p3").innerHTML = text; 
    }
}
