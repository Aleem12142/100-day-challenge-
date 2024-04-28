let myObject = {
    name: "Muhammad Aleem",
    getName: function(this: {name: string}){
        return this.name;
    }
};
console.log(myObject.getName());