function valuesToSwap() {
    var a = 9, b = 4;
    console.log("Before swap:", 'value of a =', a, 'value of b =', b);
    var temporary = a;
    a = b;
    b = temporary;
    console.log("After swap:", 'value of a = ', a, 'value of b =', b);
}
valuesToSwap();
