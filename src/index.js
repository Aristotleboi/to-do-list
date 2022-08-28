import {loadToDos, loadLists, submitToDO, clearDiv, clearModal} from './to-do-dom';
import {toDo, listType} from './to-do'
import './style.css';
import { createNewToDoForm } from './forms';


//master array that contains the other lists 
let toDolists = new listType('master-array');

let currentList = toDolists.singleList[0];


//removes elements from array. used when user deletes to-do from dom
function removeElementFromArray (array, indexNumber) {
    array.splice(indexNumber, 1)
}

//working on adding new list to large array of lists
const submitList = () => {
    let listTitle = document.querySelector('#list-form-title').value
    if (document.querySelector('#list-form-title').value == '' || document.querySelector('#list-form-title').value == "Title is required!") {
        listTitle.classList.add('form-error');
        document.querySelector('#list-form-title').value = "Title is required!"
    }

    let newList = new listType(listTitle);
    toDolists.add(newList);
    loadLists(toDolists.singleList)
}

let toDo1 = new toDo("Grocerys", "milk, cereal, coffee", "07/04/22", 'low', false);
const list1 = new listType("To-Do's")

list1.add(toDo1);
toDolists.add(list1)
loadLists(toDolists.singleList);
loadToDos(list1.singleList, list1.singleList.length, list1)

export {
    toDolists,
    removeElementFromArray,
    submitList
}