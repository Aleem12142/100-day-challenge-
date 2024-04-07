type shap = {
    kind: "Circle" | "Rectangle";
    raddious?: number;
    length?: number;
    width?: number;
};
let Circle: shap = {
    kind: "Circle",
    raddious: 8
};
let Rectangle: shap = {
    kind: "Rectangle",
    length: 16,
    width: 19
};
console.log(Circle);
console.log(Rectangle);
