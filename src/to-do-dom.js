const initialLoad = (list, listTitle, toDO, tdTitle, tdDescription, tdDueDate, tdChecked) => {
    const content = document.querySelector('.content');
    const header = document.querySelector('.to-do-lists')

    //inital load of a list
    listTab = document.createElement('div');
    listTab.innerText = listTitle

    //initial load of a to-do copied from my library app
    const card = document.createElement('div');
    card.classList.add('card');
    let title = document.createElement('h3');
    title.innerText = tdTitle;
    title.setAttribute('class', 'to-do-title')
    let description = document.createElement('p')
    description.innerText = tdDescription;
    description.setAttribute('class', 'to-do-description');
    let date = document.createElement('p');
    date.innerText = tdDueDate;
    date.setAttribute('class', 'to-do-date');
    let checked = document.createElement('div')
    checked.innerText = tdChecked;
    checked.setAttribute('class', 'to-do-checked');
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(date);
    card.appendChild(checked);
    content.appendChild(card);

}