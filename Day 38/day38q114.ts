let studentMap = new Map<number, string>();

studentMap.set(1, "John");
studentMap.set(2, "Mary");
studentMap.set(3, "Peter");

console.log("Student ID - Name:");
for(let [id, name] of studentMap){
    console.log(id + " - " + name);
}