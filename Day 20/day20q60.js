var userProfile = (function () {
    var name = "Ali Raza";
    var age = 21;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
