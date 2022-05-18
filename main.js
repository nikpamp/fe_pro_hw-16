class TodoList {
    items = []

    completeAll() {
        this.items.forEach((item) => item.done = true);
    }

    add(description) {
        let newTodoItem = new TodoItem(description);
        this.items.push(newTodoItem);
        console.log(this.items);
    }
}

class TodoItem {
    constructor(description) {
        this.description = description;
    }
}

let box = document.querySelector('.box');
let button = document.querySelector('.button');
let input = document.querySelector('.input');
let list = new TodoList();

button.addEventListener('click', function() {
    let newTask = input.value;

    if (newTask) {
        let listBox = document.createElement('div');
        listBox.className = 'todoitems';
        box.appendChild(listBox);

        let listItem = document.createElement('div');
        listItem.className = 'todoitem';
        listBox.appendChild(listItem);

        let listItemText = document.createElement('p');
        listItemText.className = 'todoitem-text';
        listItemText.innerText = newTask;
        listItem.appendChild(listItemText);
        input.value = '';
        list.add(newTask);

        let listItemCheckbox = document.createElement('input');
        listItemCheckbox.type = 'checkbox';
        listItemCheckbox.className = 'todoitem-checkbox';
        listItem.appendChild(listItemCheckbox);

        listItem.addEventListener('click', function(event) {
            let checkbox = event.target.checked;

            if (checkbox) {
                listItemText.className = 'todoitem-strikethrough';
            } else listItemText.className = 'todoitem-text';
        });
    }
});