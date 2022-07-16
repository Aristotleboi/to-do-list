import {loadFromList} from './to-do-dom';
import toDo from './to-do'

let toDolists = [];

// factory function for list
const List = (name) => {
    const getName = () => name;
    let singleList = [];
    const addToDoToArray = (toDo) => {
        singleList.push(toDo)
    }
    const getToDos = () => {return singleList};
    const removeToDO = (arraynumber) => {
        singleList.splice(arraynumber, 1);
    }

    return {
        getName,
        addToDoToArray,
        getToDos,
        removeToDO
    }
}


function addListToArray(list) {
    toDolists.push(list);
}


let toDo1 = new toDo("call the doctor", "call", "07/04/22", 'low', false);
const list1 = List("appointments");

list1.addToDoToArray(toDo1);

loadFromList(list1.getToDos())
