let dinnerguests: string[] = ['Aleem', 'Wahab', 'Rauf', 'Abid', 'Husnain', 'Ali', 'Ashar','Adeel'];

console.log('I am inviting', dinnerguests.length, 'peoples to the dinner');

dinnerguests.forEach(guest => {
    console.log(guest, ', would ypu like to join me on dinner?');
});
