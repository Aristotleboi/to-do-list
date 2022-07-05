let toDolists = [];

// factory function for list
const List = (name) => {
    const getName = () => name;
    let singleList = [];
    const addToDoToArray = (toDo) => {
        singleList.push(toDo)
    }
    const seeArray = () => console.log(singleList);
    const removeToDO = (arraynumber) => {
        singleList.splice(arraynumber, 1);
    }

    return {
        getName,
        addToDoToArray,
        seeArray,
        removeToDO
    }
}

//new to do class constructor
class toDo {
    constructor(title, description, dueDate, priority, checked) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
    }
}

function addListToArray(list) {
    toDolists.push(list);
}


let toDo1 = new toDo("call the doctor", "call", "07/04/22", 'low', false);
const list1 = List("appointments");

list1.addToDoToArray(toDo1);
list1.seeArray();


