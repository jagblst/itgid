class List2 extends List{
    constructor(item, cssClass){
        super(item);
        this.cssClass = cssClass;
    }
    render() {
        let ul = super.render();
        ul.classList.add(this.cssClass);
        return ul;
    }
}

const list2 = new List2(['five', 'six', 'seven'], 'color-blue');
document.body.append(list2.render());