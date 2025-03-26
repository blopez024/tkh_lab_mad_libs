//madLibs.js
/* Step 2: Declare and assign values to variables
Include:
Strings (e.g., const timeOfDay = "sunny afternoon";).
Numbers (e.g., const mathResult = 2 + 2;).
A boolean expression (e.g., const booleanValue = timeOfDay.includes("afternoon");).
An object with properties (e.g., const person = { name: "Mike", age: 25 };).
*/
// Step 1: Paste in one of the story templates above

const place = 'hidden warehouse';
const dividend = 8;
const divisor = 4;
const entity = {
    being: 'robot',
    name: 'RoboMax',
    object: 'metallic keycard'
}
const accessGranted = entity.object == 'metallic keycard';

const finalStory = `
"In a ${place}, I stumbled upon a hidden robot factory. The shiny machines were assembling gadgets endlessly. One ${entity.being}, named ${entity.name}, handed me a ${entity.object}. It beeped and said [${accessGranted}], 'Access Granted!' Did you know ${dividend} ÷ ${divisor} equals ${Math.floor(dividend / divisor)}? Fascinating, right?"
`;

document.getElementById("madlibs-output").textContent = finalStory;
console.log(finalStory);
