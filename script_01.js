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

// Bedingungs gebunden durch (if) Checked ob Ja oder Nein 
/*
//if (true) = Wahrheitswert           
//if (isJohnOlder) = Test
//if (ageJohn > ageMark) = Test
if (35 > 30)
{
    console.log("John ist älter");  // codeblock = {}
}
*/