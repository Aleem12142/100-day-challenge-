let guestss: string[] = ['Wahab Ali', 'Abdul Rauf', 'Abid Ali'];
guestss.forEach(guest => {
    console.log(guest, ', would you be my guest on tonuights dinner?');
});
let unabletoattend = 'Abdul Rauf';
console.log(unabletoattend, 'is unable to attend tonights dinner,');
let newguest = 'Husnain';
guestss[guestss.indexOf(unabletoattend)] = newguest;
guestss.forEach(guest => {
    console.log(guest, ', would you join me on tonights dinner?');
});