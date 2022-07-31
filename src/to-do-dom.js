import { createNewToDoForm, editToDoForm } from "./forms";
import { toDo } from "./to-do";
import { removeElementFromArray } from ".";

//loads to-do's from array to dom
const loadToDos = (listArray, listLength, list) => {
    //this clears the dom of all to-do cards and clears the form after its been submitted
    clearDiv('.content')
    const content = document.querySelector('.content');
    console.log(list.length)
    let numberOfToDos = listLength;
    let newButton = document.createElement('button');
    newButton.innerText = '+';
    newButton.addEventListener('click', () => {
        createNewToDoForm(list)
    })
    content.appendChild(newButton);
    for (let i = 0; i < numberOfToDos; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        let title = document.createElement('h3');
        title.innerText = listArray[i].title;
        title.setAttribute('class', 'to-do-title')
        let description = document.createElement('p')
        description.innerText = listArray[i].description;
        description.setAttribute('class', 'to-do-description');
        let date = document.createElement('p');
        date.innerText = listArray[i].dueDate;
        date.setAttribute('class', 'to-do-date');
        let checked = document.createElement('div')
        checked.innerText = listArray[i].checked;
        checked.setAttribute('class', 'to-do-checked');
        let closeButton = document.createElement('button');
        closeButton.setAttribute('class', 'to-do-close-button');
        closeButton.innerText = 'delete';
        let editButton = document.createElement('button');
        editButton.setAttribute('class', 'to-do-edit-button');
        editButton.innerText = 'Edit';

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(date);
        card.appendChild(checked);
        card.appendChild(editButton)
        card.appendChild(closeButton);
        content.appendChild(card);

        //close button functionality
        closeButton.addEventListener('click', () => {
            content.removeChild(card)
            removeElementFromArray(listArray, i)
        })
        //edit button functionality
        editButton.addEventListener('click', () => {
            editToDoForm(listArray[i], list)
            
        })

    }
}

//loads lists to dom
//requires master array with all lists as input
const loadLists = (lists) => {
    const header = document.querySelector('.to-do-lists');
    let numberOfLists = lists.length;
    for (let i = 0; i < numberOfLists; i++) {
        const tab = document.createElement('div');
        tab.classList.add('tab')
        let title = document.createElement('div')
        title.innerText = lists[i].name;
        tab.appendChild(title);
        header.appendChild(tab);
    }
}
//get values from form pop up to make new to-do.
//requires list object as input
const submitToDO = (list) => {
    let toDoTitle = document.querySelector('#form-title').value;
    let toDoDescription = document.querySelector('#form-description').value;
    let toDoDate = document.querySelector('#form-date').value;
    let toDoPriority = document.querySelector('#form-priority').value;

    let newToDo = new toDo(toDoTitle, toDoDescription, toDoDate, toDoPriority, false);
    list.add(newToDo);
    console.log(list);

    loadToDos(list.singleList, list.singleList.length, list)
}

//function to clear dom of to-dos
const clearDiv = (childDiv) => {
    document.querySelector(childDiv).innerHTML = "";
}


export {
    loadToDos,
    loadLists,
    submitToDO
}