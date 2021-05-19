// Entscheidungsstrukturen | control structures

// Deklaration 
let ageJohn, ageMark; 
let isJohnOlder, isJohnEqual;

// Wertzuweisung 
ageJohn = 35;
ageMark = 30;

// Logische Aussagen / Tests
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
//console.log("isJohnOlder: " + isJohnOlder);
//console.log("isJohnEqual: " + isJohnEqual);

/*********** IF **********/

//console.log("John ist älter"); // unbedingte Aussage 

// alternativlos (TINA)

// Bedingungs gebunden durch (if) ja oder nix
/*
//if (true) = Wahrheitswert           
//if (isJohnOlder) = Test
//if (ageJohn > ageMark) = Test
if (35 > 30)
{
    console.log("John ist älter");  // codeblock = {}
}
*/

/********** IF - ELSE **********/
// mit Alternativen
// entweder ja oder nein
/*
if (isJohnOlder)
{
    // Ja-Zweig / true
    console.log("John ist älter"); 
}
else 
{
    // Nein-Zweig / false
    console.log("John ist jünger"); 
} 
*/

/*********** Ternäre (ternary) Schreibweise *********/
// if-else struktur
/*
console.log( (isJohnOlder) ? "John is older" : "Marc is older");
*/

/*********** IF-ELSE IF **********/
// mit Alternativen Fällen (älter,jünger,gleich alt)
/*
if (isJohnOlder)
{
    // Ja-Zweig / true
    console.log("John ist älter");
} 
else if (isJohnEqual)    //kann beliebig oft benutzt werden für Alternativen 
{
    // 1. Alternative / false
    console.log("John und Mark sind gleichalt"); 
}
 //kann beliebig oft benutzt werden für Alternativen 
 // else if (...)
else // mus der letzte Befehl sein
{
    // letzte Alternative / false
    console.log("John ist jünger"); 
}
*/

/***** Fallunterscheidung / Case | Switch 1 *****/
/*
let firstName, job;
firstName = "Jane"; 
job = "driver";   // fährt Taxi!
job = "diver";   // taucht im Rhein!
job = "pilot";  // macht etwas anderes!
job = "artist";  // malt ein Bild!
job = "teacher"; // unterrichtet!
job = "instructor"; // unterrichtet!

switch (job) {
    case "driver":
        console.log(firstName + " fährt Taxi!");
        break;
    case "diver":
        console.log(firstName + " taucht im Rhein!");
        break;
    case "artist":
        console.log(firstName + " malt ein Bild!");
        break;
    case "teacher":
    case "instructor":
        console.log(firstName + " unterrichtet!");
        break;


    // für alle nicht bezeichneten Fälle..
    default:
        console.log(firstName + " macht etwas anderes!");
        break;
}
*/
