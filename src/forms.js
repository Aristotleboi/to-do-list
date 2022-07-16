const createNewToDoForm = () => {
    let content = document.querySelector('.content')
    let form = document.createElement('form')
    form.classList.add('form');

    let FT = document.createElement('div')
    FT.setAttribute('class', 'form-title');
    let FTLabel = document.createElement('label');
    FTLabel.setAttribute('for', 'form-title')
    FTLabel.innerText = 'Title';
    let FTInput = document.createElement('input');
    FTInput.setAttribute('type', 'text');
    FTInput.setAttribute('name', 'form-title');
    FTInput.setAttribute('id', 'form-title');

    FT.appendChild(FTLabel);
    FT.appendChild(FTInput);
    form.appendChild(FT);
    content.appendChild(form);
}

export {createNewToDoForm}