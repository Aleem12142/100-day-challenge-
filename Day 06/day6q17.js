"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let $guests = ['Rauf', 'Abid', 'Husnain'];
console.log('Greate news friends, I have found a big dinner table');
$guests.unshift('Wahab');
$guests.splice($guests.length / 2, 0, 'Ashar');
$guests.push('Adeel');
$guests.forEach(guest => {
    console.log('Dear', guest, ', would you like to join me on dinner?');
});
console.log('nfortunately, I can invite only two people on dinner');
while ($guests.length > 2) {
    let removedguests = $guests.pop();
    console.log('Sorry', removedguests, ', I cant invite you to the dinner');
}
;
$guests.forEach(guest => {
    console.log('Dear', guest, ', you are still invited to the dinner');
});
