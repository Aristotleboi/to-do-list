

const loadFromList = (list) => {
    const content = document.querySelector('.content');
    const header = document.querySelector('.to-do-lists')
    let numberOfToDos = list.length;
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
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(date);
        card.appendChild(checked);
        content.appendChild(card);
    }
}

export {loadFromList}