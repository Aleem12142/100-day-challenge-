function categorizePerson(age) {
    if (age < 2) {
        return 'Baby';
    }
    else if (age < 4) {
        return 'Todler';
    }
    else if (age < 13) {
        return 'Kid';
    }
    else if (age < 20) {
        return 'Teanager';
    }
    else if (age < 65) {
        return 'Adult';
    }
    else {
        return 'Elder';
    }
}
console.log(categorizePerson(12));
console.log(categorizePerson(17));
console.log(categorizePerson(23));
