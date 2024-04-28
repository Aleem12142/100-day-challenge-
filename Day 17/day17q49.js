"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hobbiesList(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}
hobbiesList('painting', 'playing', 'reading', 'gardning');
