const str: string = "Hello World";
const vowels: string[] = ["a", "e", "i", "o", "u"];

for(let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i].toLocaleLowerCase())) {
        console.log("First vowel found:" ,str[i]);
        break;
    }
}