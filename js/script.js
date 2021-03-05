// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");


//Extraire l'heure actuel à l'aide de l'objet Date()
let maDate = new Date();
//console.log(maDate);
//Stocker l'heure , minute , seconde  dans des varaiables
let monHeure = maDate.getHours();
let maMin = maDate.getMinutes();
let maSec = maDate.getSeconds();


if (monHeure<10){
    monHeure="0"+monHeure;
}
if(maMin<10){
    maMin="0"+maMin;
}
if(maSec<10){
    maSec="0"+maSec;
}
let formatHeure = monHeure+":"+maMin+":"+maSec;
console.log(formatHeure);


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
/*1h = 30°
pour les heures:
360/3600=0.1°
pour les minutes:
30/60=0.5°
pour le seconds:
360/60=6°
*/
let degHeure = monHeure* 360/12 + 360/(12*maMin);
let degMin = maMin*6;
let degSec = maSec*360/60; 

function demarrerLaMontre() {
console.log('degre :',degSec);
console.log('degre :',degMin);
console.log('degre :',degHeure);

degSec = degSec + 6;
degMin = degMin + 0.1;
degHeure += 0.008;

AIGUILLEHR.style.transform=
    'rotate('+ degHeure +'deg)';

AIGUILLEMIN.style.transform= 
    'rotate('+ degMin +'deg)';

AIGUILLESEC.style.transform=
   'rotate('+ degSec +'deg)';

// Déplacer les aiguilles 



}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);