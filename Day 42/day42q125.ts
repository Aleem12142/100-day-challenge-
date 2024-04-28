let object = {
    name: "Muhammad Aleem",
    description: "I am a Software Developer.",
    getInfo: function(this: {name: string, description: string}){
        return `${this.name}: ${this.description}`;
    }
};
console.log(object.getInfo());