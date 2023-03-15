class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }
    render() {
        let button = document.createElement('button');
        button.style.width = this.width + 'px';
        button.style.height = this.height + 'px';
        button.style.background = this.background;
        button.innerHTML = this.value;
        return button;
    }
}

let firstButton = new Button(200, 50, 'aqua', 'First');
document.querySelector('body').append(firstButton.render());