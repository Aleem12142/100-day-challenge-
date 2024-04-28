"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ['Aleem', 'Ashar', 'Adeel'];
console.log('Hi guys, I have found a big dinner table tonight');
guests.push('Noor');
guests.splice(guests.length / 2, 0, 'Wahab');
guests.unshift('Rauf');
guests.forEach(guest => {
    console.log('Dear', guest, ', would you like to join me on dinner tonight?');
});
