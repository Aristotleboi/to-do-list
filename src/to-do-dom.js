import { createNewToDoForm } from "./forms";

const loadToDos = (list) => {
    const content = document.querySelector('.content');
    let numberOfToDos = list.length;
    let newButton = document.createElement('button');
    newButton.innerText = '+';
    newButton.addEventListener('click', () => {
        createNewToDoForm()
    })
    content.appendChild(newButton);
    for (let i = 0; i < numberOfToDos; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        let title = document.createElement('h3');
        title.innerText = list[i].title;
        title.setAttribute('class', 'to-do-title')
        let description = document.createElement('p')
        description.innerText = list[i].description;
        description.setAttribute('class', 'to-do-description');
        let date = document.createElement('p');
        date.innerText = list[i].dueDate;
        date.setAttribute('class', 'to-do-date');
        let checked = document.createElement('div')
        checked.innerText = list[i].checked;
        checked.setAttribute('class', 'to-do-checked');
        let closeButton = document.createElement('button');
        closeButton.setAttribute('class', 'to-do-close-button');
        closeButton.innerText = 'delete';

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(date);
        card.appendChild(checked);
        card.appendChild(closeButton);
        content.appendChild(card);

        //close button functionality
        closeButton.addEventListener('click', () => {
            content.removeChild(card)
        })
    }
}

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

export {
    loadToDos,
    loadLists
}