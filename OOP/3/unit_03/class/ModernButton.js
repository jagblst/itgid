class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius = 0) {
        super(width, height, background, value);
        this.borderRadius = borderRadius;
    }
    render() {
        let btn = super.render();
        btn.style.borderRadius = this.borderRadius + 'px';
        return btn;
    }
}

let secondButton = new ModernButton(300, 100, 'yellow', 'Second', 50);
document.querySelector('body').append(secondButton.render());