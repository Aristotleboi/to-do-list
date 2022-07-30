 class toDo {
    constructor(title, description, dueDate, priority, checked) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
    }
}

class listType {
    constructor(name) {
        this.name = name;
        this.singleList = [];
        this.length = this.singleList.length;

        this.add = function (toDo) {
            this.singleList.push(toDo)
        }
    }
}


export {
    toDo,
    listType
}