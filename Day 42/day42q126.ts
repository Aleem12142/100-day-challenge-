let myObject = {
    name: "Muhammad Aleem",
    outerMethod: function(){
        console.log(this.name);
        let innerFunction = () => {
            console.log(this.name);
        };
        innerFunction();
    }
};
myObject.outerMethod();