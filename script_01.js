// Entscheidungsstrukturen | control structures

// Deklaration 
let ageJohn, ageMark; 
let isJohnOlder, isJohnEqual;

// Wertzuweisung 
ageJohn = 30;
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

/*********** IF-ELSE-IF **********/
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