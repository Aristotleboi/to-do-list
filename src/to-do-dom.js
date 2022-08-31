import { createNewToDoForm, editToDoForm, newListForm, editList } from "./forms";
import { listType, toDo } from "./to-do";
import { removeElementFromArray, submitList, toDolists } from ".";

//loads to-do's from array to dom
const loadToDos = (listArray, listLength, list) => {
    //this clears the dom of all to-do cards and clears the form after its been submitted
    const content = document.querySelector('.content');
    let numberOfToDos = listLength;
    let newButton = document.querySelector('.new-to-do')
    if (newButton) {
        newButton.addEventListener('click', () => {
            createNewToDoForm(list)
        })
    }
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
        let closeButton = document.createElement('button');
        closeButton.setAttribute('class', 'to-do-close-button');
        closeButton.innerText = 'delete';
        let editButton = document.createElement('button');
        editButton.setAttribute('class', 'to-do-edit-button');
        editButton.innerText = 'Edit';
        let checkButton = document.createElement('button')
        checkButton.setAttribute('class', 'check-button');
        checkButton.innerText = 'Check'

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(date);
        card.appendChild(checkButton)
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
        checkButton.addEventListener('click', () => {
            if (card.classList == 'card checked') {
                card.classList.remove('checked')
                listArray[i].checked = false;
                return
            }
            card.classList.add('checked');
            listArray[i].checked = true;
        })

    }
}

//loads lists to dom
//requires master array with all lists as input
const loadLists = (lists) => {
    const header = document.querySelector('.to-do-lists');
    let numberOfLists = lists.length;

    const newListButton = document.querySelector("#new-list");
    newListButton.addEventListener('click', () => {
        newListForm();
    })

    for (let i = 0; i < numberOfLists; i++) {
        const tab = document.createElement('div');
        tab.classList.add('tab')
        tab.innerText = lists[i].name;
        tab.setAttribute('date-array', i)
        tab.addEventListener('click', () => {
            clearDiv('.content')
            clearDiv('.modal')
            clearModal()
            loadToDos(toDolists.singleList[i].singleList, toDolists.singleList[i].listLength(), toDolists.singleList[i])
        })
        const editListButton = document.createElement('button');
        editListButton.innerText = '...';
        editListButton.addEventListener('click', () => {
            editList(lists[i])
        })
        const closeButton = document.createElement('button');
        closeButton.innerText = 'X';
        closeButton.addEventListener('click', () => {
            if(toDolists.listLength() == 1) return
            header.removeChild(tab);
            header.removeChild(editListButton)
            header.removeChild(closeButton)
            removeElementFromArray(toDolists.singleList, i)
            clearDiv('.content')
            clearDiv('.to-do-lists')
            loadLists(toDolists.singleList)
            loadToDos(toDolists.singleList[0].singleList, toDolists.singleList[0].listLength(), toDolists.singleList[0])
        })
        //tab.appendChild(editListButton)
        //tab.appendChild(closeButton)
        header.appendChild(tab);
        header.appendChild(editListButton);
        header.appendChild(closeButton)
    }
}
//get values from form pop up to make new to-do.
//requires list object as input
const submitToDO = (list) => {
    let toDoTitle = document.querySelector('#form-title').value;
    let toDoDescription = document.querySelector('#form-description').value;
    let toDoDate = document.querySelector('#form-date').value;

    // checks to see to-do at least has title
    if (document.querySelector('#form-title').value == '' || document.querySelector('#form-title').value == "Title is required!") {
        let titleBox = document.querySelector('#form-title');
        titleBox.classList.add('form-error');
        document.querySelector('#form-title').value = "Title is required!"
        return
    }

    let newToDo = new toDo(toDoTitle, toDoDescription, toDoDate, 'low', false);
    list.add(newToDo);
    clearDiv('.content')
    clearDiv('.modal')
    clearModal()
    loadToDos(list.singleList, list.listLength(), list)
}

//function to clear dom of to-dos
const clearDiv = (childDiv) => {
    document.querySelector(childDiv).innerHTML = "";
}

const clearModal = () => {
    let modal = document.querySelector('.modal')
    let overlay = document.querySelector('.overlay')
    modal.classList.remove('active');
    overlay.classList.remove('active')
}


export {
    loadToDos,
    loadLists,
    submitToDO,
    clearDiv,
    clearModal
}