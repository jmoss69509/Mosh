function wordBlanks (myNoun, myAdjective, myVerb, myAdverb){
    myNoun = 
    document.write (`The ${myAdjective.toUpperCase()} ${myNoun} ${myVerb} to Sainsburys ${myAdverb}.<br>`);
}
wordBlanks ("dog","big","ran","quickly");
wordBlanks   ("monster","small","limped","slowly");
wordBlanks ("baby", "fat", "crawled", "like a snail");
var firstName = "Frederico";
var lastName = "Iglasias";
document.write (`My name is ${firstName} ${lastName}.<br>`);
// Arrays

var myArray = [["This is my array", 23], [["Nested!"],["Something Else", "Second Sentence", "Third"]]];
//document.write (`${myArray[0]}, and I am ${myArray[0,1]} years old. ${firstName} ${lastName}<br>`);
//myArray[1] = ("Another string");
document.write (`${myArray[0][0]}, and I am ${myArray[1]} years old. ${firstName} ${lastName}<br>`);
document.write (`${myArray [1][1][0]}<br>`);
var myNewPushArray = ["This ","is a ", "test"];
myNewPushArray.push ("to ", "prove ","it ","works.");
document.write(`${myNewPushArray} <br>`);

function arrayPrinter(arrayInput){
    for (count = 0; count <=arrayInput.length-1; ++count){
        document.write (`${arrayInput[count]} ${count}<br>`);
    }
}
arrayPrinter(myNewPushArray);

function subtraction (a,b){
    return (a -b);
}
let br = "<br>";
document.writeln (`${subtraction(3,2)}  ${br}`);
document.writeln (subtraction(6,3)+ br);
