const { Circle, Triangle, Square } = require("../lib/shapes");

test("Should create a blue triangle", () => {
    const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})

test("Should create a red circle", () => {
    const shape = new Circle();
shape.setColor("red");
expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
})

test("Should create a green square", () => {
    const shape = new Square();
shape.setColor("green");
expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="green" />');
})

