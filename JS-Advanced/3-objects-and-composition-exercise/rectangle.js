function rectangle (width, height, color) {
    let colorRect = color[0].toUpperCase() + color.substring(1);

    const rect = {
        width,
        height,
        color: colorRect
    }

    rect.calcArea = () => {
        return rect.width * rect.height;
    }

    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());