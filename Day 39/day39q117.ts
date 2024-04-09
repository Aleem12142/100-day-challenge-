function evaluateExpression(expression: string): void{
    switch (expression) {
        case "add":
            console.log("Performing addition operation...");
            break;
        case "subtract":
            console.log("Performing subtraction operation...");
            break;
        case "multiply":
            console.log("Performing multiplication operation...");
            break;
        case "divide":
            console.log("Performing division operation...");
            break;
        case "modulus":
            console.log("Performing modulus operation...");
            break;
        case "power":
            console.log("Performing power operation...");
            break;
        default:
            console.log("Invalid expression!");
            break;
    }
}

evaluateExpression("add");
evaluateExpression("subtract");
evaluateExpression("multiply");
evaluateExpression("divide");
evaluateExpression("modulus");
evaluateExpression("power");
evaluateExpression("invalid");