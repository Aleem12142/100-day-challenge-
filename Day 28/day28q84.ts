function replaceSentence(sentence: string): string{
    return sentence.replace(/Adeel/g, "Aleem");
}

console.log(replaceSentence("My best friend is Adeel and Adeel is a good person."));

function replaceJavascriptWithTypescript(sentence: string): string{
    return sentence.replace(/JavaScript/g, "TypeScript");
}

console.log(replaceJavascriptWithTypescript("I love JavaScript and JavaScript is awesome!!"));
