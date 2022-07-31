import {loadToDos, loadLists, submitToDO} from './to-do-dom';
import {toDo, listType} from './to-do'
import './style.css';
import { createNewToDoForm } from './forms';


//master array that contains the other lists 
let toDolists = [];

let currentList = toDolists[0];

function addListToArray(list) {
    toDolists.push(list);
}

//removes elements from array. used when user deletes to-do from dom
function removeElementFromArray (array, indexNumber) {
    array.splice(indexNumber, 1)
}



let toDo1 = new toDo("Grocerys", "milk, cereal, coffee", "07/04/22", 'low', false);
const list1 = new listType('Default')

list1.add(toDo1);
addListToArray(list1);
loadLists(toDolists)
loadToDos(list1.singleList, list1.singleList.length, list1)

export {
    currentList,
    removeElementFromArray
}