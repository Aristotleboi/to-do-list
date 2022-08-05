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

        this.add = function (toDo) {
            this.singleList.push(toDo)
        }
        
        this.listLength = function () {
            return this.singleList.length
        }
    }
}


export {
    toDo,
    listType
}