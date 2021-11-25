// exo 1

let integer = document.getElementById('is-integer');

if(Number.isInteger(integer)){
    document.getElementById('is-integer').innerText = "==> est un nombre entier";
}
else{
    document.getElementById('is-integer').innerText = "==> n'est pas un nombre entier";
}

// exo 2

if(isNaN(document.getElementById('is-nan').innerHTML)){
    document.getElementById('is-nan').innerHTML = "==> est NaN";
}
else {
    document.getElementById('is-nan').innerHTML = "==> est un nombre.";
}

//exo 3

let parsef = document.getElementById('parse-float');
let number = parseFloat(parsef.innerHTML);

parsef.innerHTML = +(number * 20)+ "% de la population";

//exo 4

let parsei = document.getElementById('parse-int') ;
let numberr = parseInt(parsei.innerHTML);

parsei.innerHTML = +(numberr / 20)+ "px";

//exo 5
let valeur = document.getElementById('to-fixed');
valeur.innerHTML = parseFloat(valeur.innerHTML).toFixed(2)
