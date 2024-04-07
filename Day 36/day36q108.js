function areStringsIdentical(string1, string2) {
    return string1.toLocaleLowerCase() === string2.toLocaleLowerCase();
}
console.log(areStringsIdentical('aleem', 'ALEEM'));
console.log(areStringsIdentical('ASHAR', 'ashar'));
