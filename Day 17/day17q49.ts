function hobbiesList(...hobbies: string[]): void {
    hobbies.forEach(hobby =>{
        console.log(`I enjoy ${hobby}.`);
    });
}

hobbiesList('painting', 'playing', 'reading', 'gardning');
