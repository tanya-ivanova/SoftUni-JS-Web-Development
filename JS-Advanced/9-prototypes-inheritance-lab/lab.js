function Button(label) {
    this.label = label;
}

Button.prototype.click = function() {
    return `${this.label} is clicked.`
}

function FancyButton(label, color) {
    Button.call(this, label);
    this.color = color;
}

FancyButton.prototype = Object.create(Button.prototype);
FancyButton.prototype.constructor = FancyButton;

FancyButton.prototype.glow = function() {
    return `The button glows in ${this.color}`;
}

let btn = new FancyButton('Confetti', 'green');
btn.glow();
btn.click();