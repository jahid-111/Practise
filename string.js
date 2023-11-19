// console.log("Hello Terminal");


/* function the_text(text) {
    let inSentence = '';
    for (i = text.length - 1; i >= 0; i--) {
        const theLetter = text[i];
        inSentence = inSentence + theLetter;
        // console.log(inSentence);
    }
    return inSentence;
}

const sentence = "I'm Gonna be a Web Developer";
const result = the_text(sentence);
console.log(result);
// repoleveD beW a eb annoG m'I */

// ===============  TEXT TO SLPIT -> FIND ARRAY-> PUSH ASSAY -> ARRAY TO SENTENCE ==
function revrseText(text) {
    const words = text.split(' ')
    const sentn = [];

    for (i = words.length - 1; i >= 0; i--) {
        const theSentence = words[i];
        sentn.push(theSentence);
    }
    // console.log(sentn);
    const joinSentence = sentn.join(' ')
    return joinSentence;
}

const theText = "I'm Learning Programming";
const result1 = revrseText(theText);
console.log(result1);
// Programming Learning I'm

