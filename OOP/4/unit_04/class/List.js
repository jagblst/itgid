class List {
    constructor(item){
        this.item = item;
    }
    render() {
        let ul = document.createElement('ul');
        for (let i = 0; i < this.item.length; i++){
            let li = document.createElement('li');
            li.textContent = this.item[i]; 
            ul.appendChild(li);
        }
        return ul;
    }
}

const list1 = new List(['one', 'two', 'three', 'four']);
document.body.append(list1.render());
