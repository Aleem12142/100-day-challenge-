let traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFuntion: function() {
        console.log("Traditional Fauntion:" ,this.value);
    },
    arrowFunction: () => {
        console.log("Arrow Funtion:" ,this.value);
    },
};

traditionalVsArrow.traditionalFuntion();
traditionalVsArrow.arrowFunction();