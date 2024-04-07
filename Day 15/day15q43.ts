let magicianss: string[] = ['Kareem', 'Kaleem', 'Kamran', 'Jabbar'];

function show_magicians(magicianss: string[]){
    magicianss.forEach(magician =>{
        console.log(magician);
    });
}

function make_great(magicianss: string[]): string[] {
    let greatMagicians: string[] = [];
    magicianss.forEach(magician =>{
        greatMagicians.push(`The Great ${magician}`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicianss.slice());
console.log("Original Magicians:");
show_magicians(magicianss);
console.log("Great Magician:");
show_magicians(greatMagicians);


