import {loadToDos, loadLists, submitToDO, clearDiv, clearModal} from './to-do-dom';
import {toDo, listType} from './to-do'
import './style.css';
import { createNewToDoForm } from './forms';


const LOCAL_STORAGE_LIST = "to.do.lists"

let toDoListsSave = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST))

//master array that contains the other lists 
let toDolists = new listType('master-array');

const save = () => {
    localStorage.setItem(LOCAL_STORAGE_LIST, JSON.stringify(toDolists))
}

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
    clearDiv('.to-do-lists')
    save()
    loadLists(toDolists.singleList)
}

const initialLoad = () => {
    let toDo1 = new toDo("Grocerys", "milk, cereal, coffee", "2022-08-27", 'low', false);
    const list1 = new listType("Default")
    list1.add(toDo1)
    toDolists.add(list1)
    loadLists(toDolists)
    loadToDos(list1.singleList, list1.singleList.length, list1)
    const showAllLists = document.querySelector('.master-list')
    showAllLists.addEventListener('click', () => {
        console.log(toDolists.singleList[0].singleList)
        if (toDolists.listLength() === 1) return
        clearDiv('.content')
        clearDiv('.modal')
        clearModal()
        for (let i = 0; i < toDolists.listLength(); i++) {
            loadToDos(toDolists.singleList[i].singleList, toDolists.singleList[i].listLength(), toDolists.singleList[i])
        }
    })
}

const parseLists = () => {
    toDoListsSave.singleList.forEach(list => {
        console.log(list)
        let newList = new listType(list.name)
        list.singleList.forEach(toDoSave => {
            let newToDo = new toDo(toDoSave.title, toDoSave.description, toDoSave.dueDate, toDoSave.priority, toDoSave.checked)
            newList.add(newToDo)
        })
        toDolists.add(newList)
    });
}

const loadPage = () => {
    if (toDoListsSave == null) initialLoad()
    else {
        parseLists()
        loadLists(toDolists.singleList)
        loadToDos(toDolists.singleList[0].singleList, toDolists.singleList[0].listLength(), toDolists.singleList[0])
        const showAllLists = document.querySelector('.master-list')
        showAllLists.addEventListener('click', () => {
            console.log(toDolists.singleList[0].singleList)
            if (toDolists.listLength() === 1) return
            clearDiv('.content')
            clearDiv('.modal')
            clearModal()
            for (let i = 0; i < toDolists.listLength(); i++) {
                loadToDos(toDolists.singleList[i].singleList, toDolists.singleList[i].listLength(), toDolists.singleList[i])
            }
        })
    }

}

let toDo1 = new toDo("Grocerys", "milk, cereal, coffee", "2022-08-27", 'low', false);
const list1 = new listType("Default To-Do List")

loadPage()
export {
    toDolists,
    removeElementFromArray,
    submitList,
    save
}