import {loadToDos, loadLists} from './to-do-dom';
import {toDo, listType} from './to-do'
import './style.css';

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


let toDo1 = new toDo("Grocerys", "milk, cereal, coffee", "07/04/22", 'low', false);
const list1 = new listType('Default')

list1.add(toDo1);
addListToArray(list1);

loadLists(toDolists)
loadToDos(list1.singlelist)
