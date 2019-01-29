"use strict";

let sentence = ["elke", "zin", "begint", "met", "een", "hoofdletter"];
let changeSentence = ["hoort", "te", "beginnen"];
let everyWord = ["elk", "woord", "in", "de"];

let output = grabId("output");

/* OPDRACHT 1.
 * Maak de functie capitalizeFirstChar af, let op de parameters en de return value;
 * Zoek op MDN wat slice (String) doet en gebruik deze functie om de
 * functie capitalizeFirstChar af te maken.
 */

output.innerHTML = capitalizeFirstChar(output.innerHTML);
// Verwacht resultaat: "Change me"

/*
 * OPDRACHT 2.
 * Maak de functie showArray af, let op de parameters en de return value;
 * Zoek op MDN wat de join array functie doet en
 * gebruik deze array functie om de functie showArray af te maken.
 */

output.innerHTML = showArray(output, sentence);
// Verwacht resultaat: "elke zin begint met een hoofdletter"

/*
 * OPDRACHT 3.
 * Zoek op MDN wat de splice array functie doet en
 * gebruik deze array functie om de array changeSentence in te voegen op het woord "begint".
 * Hint: gebruik ook spread
 */

sentence.splice(2, 1, ...changeSentence);
output.innerHTML = showArray(output, sentence);
// Verwacht resultaat: "elke zin hoort te beginnen met een hoofdletter"

/*
 * OPDRACHT 4.
 * Voeg de everyWord array in op door het eerste woord "elk" te vervangen.
 */

sentence.splice(0, 1, ...everyWord);
// output.innerHTML = showArray(output, sentence);
// Verwacht resultaat: "elk wooord in de zin hoort te beginnen met een hoofdletter"

/*
 * OPDRACHT 5.
 * Combineer de twee functies:
 * showArray en capitalizeFirstChar
 * Zoek op MDN welke functie je kunt gebruiken om capitalizeFirstChar op
 * elk array element toe te passen
 */

output.innerHTML = showArray(output, sentence.map(capitalizeFirstChar));
// Verwacht resultaat: "Elk Woord In De Zin Hoort Te Beginnen Met Een Hoofdletter"



/*
 * FUNCTIE VOOR OPDRACHT 1.
 */
function capitalizeFirstChar(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

/*
 * FUNCTIE VOOR OPDRACHT 2.
 */
function showArray(id, arr) {
    return arr.join(" ");
}

/*
 * Functie om een id te selecteren.
 */
function grabId(value) {
    return document.getElementById(value);
}


