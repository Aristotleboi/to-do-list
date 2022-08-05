import { currentList, submitList } from ".";
import { submitToDO, loadToDos } from "./to-do-dom";

const createNewToDoForm = (list) => {
    let modal = document.querySelector('.modal')
    let form = document.createElement('form')
    form.classList.add('form');

    
    let FT = document.createElement('div')
    FT.setAttribute('class', 'form-title');
    let FTLabel = document.createElement('label');
    FTLabel.setAttribute('for', 'form-title')
    FTLabel.innerHTML = 'Title';
    let FTInput = document.createElement('input');
    FTInput.setAttribute('type', 'text');
    FTInput.setAttribute('name', 'form-title');
    FTInput.setAttribute('id', 'form-title');
    let FD = document.createElement('div');
    FD.classList.add('form-description');
    let FDLabel = document.createElement('label');
    FDLabel.setAttribute('for', 'form-description')
    FDLabel.innerHTML = 'Description';
    let FDInput = document.createElement('input')
    FDInput.setAttribute('type', 'text');
    FDInput.setAttribute('name', 'form-description');
    FDInput.setAttribute('id', 'form-description');
    let FDate = document.createElement('div');
    FDate.setAttribute('class' ,'form-date');
    let FDateLabel = document.createElement('label');
    FDateLabel.setAttribute('for', 'form-date');
    FDateLabel.innerText = 'Date';
    let FDateInput = document.createElement('input');
    FDateInput.setAttribute('type', 'text');
    FDateInput.setAttribute('name', 'form-date');
    FDateInput.setAttribute('id', 'form-date');
    let FP = document.createElement('div');
    FP.setAttribute('class' ,'form-priority');
    let FPLabel = document.createElement('label');
    FPLabel.setAttribute('for', 'form-priority');
    FPLabel.innerText = 'Priority';
    let FPInput = document.createElement('input');
    FPInput.setAttribute('type', 'text');
    FPInput.setAttribute('name', 'form-priority');
    FPInput.setAttribute('id', 'form-priority');
    let FB = document.createElement('button')
    FB.setAttribute('type', 'submit');
    FB.setAttribute('id', 'form-submit-button')
    FB.innerText = 'submit';

    FB.addEventListener('click', () => {
        submitToDO(list);
    })

    //pop up modal
    modal.classList.add('active')
    let overlay = document.querySelector('.overlay')
    overlay.classList.add('active')

    FT.appendChild(FTLabel);
    FT.appendChild(FTInput);
    FD.appendChild(FDLabel)
    FD.appendChild(FDInput);
    FDate.appendChild(FDateLabel);
    FDate.appendChild(FDateInput);
    FP.appendChild(FPLabel);
    FP.appendChild(FPInput);
    form.appendChild(FT);
    form.appendChild(FD);
    form.appendChild(FDate);
    form.appendChild(FP);
    modal.appendChild(form);
    modal.appendChild(FB)


}

const editToDoForm = (toDo, list) => {
    createNewToDoForm()
    let modal = document.querySelector('.modal')
    let FB = document.querySelector('#form-submit-button')
    FB.remove();
    let editFormButton = document.createElement('button');
    editFormButton.innerText = "save"
    editFormButton.setAttribute('type', 'submit');
    editFormButton.setAttribute('id', 'form-submit-button')

    document.querySelector('#form-title').value = toDo.title;
    document.querySelector('#form-description').value = toDo.description;
    document.querySelector('#form-date').value = toDo.dueDate;
    document.querySelector('#form-priority').value = toDo.priority;

    editFormButton.addEventListener('click', () => {
        toDo.title = document.querySelector('#form-title').value;
        toDo.description = document.querySelector('#form-description').value;
        toDo.dueDate = document.querySelector('#form-date').value;
        toDo.priority = document.querySelector('#form-priority').value;

        if (document.querySelector('#form-title').value == '' || document.querySelector('#form-title').value == "Title is required!") {
            let titleBox = document.querySelector('#form-title');
            titleBox.classList.add('form-error');
            document.querySelector('#form-title').value = "Title is required!"
            return
        }

        loadToDos(list.singleList, list.singleList.length, list)
    })

    modal.appendChild(editFormButton)
}

const newListForm = () => {
    let modal = document.querySelector('.modal')
    let form = document.createElement('form')
    form.classList.add('list-form');
    let FT = document.createElement('div')
    FT.setAttribute('class', 'list-form-title');
    let FTLabel = document.createElement('label');
    FTLabel.setAttribute('for', 'list-form-title')
    FTLabel.innerHTML = 'Title';
    let FTInput = document.createElement('input');
    FTInput.setAttribute('type', 'text');
    FTInput.setAttribute('name', 'list-form-title');
    FTInput.setAttribute('id', 'list-form-title');
    let FB = document.createElement('button')
    FB.setAttribute('type', 'submit');
    FB.setAttribute('id', 'list-form-button')
    FB.innerText = 'submit';
    FB.addEventListener('click', () => {
        submitList()
    })

    modal.classList.add('active')
    let overlay = document.querySelector('.overlay')
    overlay.classList.add('active')

    form.appendChild(FT)
    form.appendChild(FTLabel);
    form.appendChild(FTInput)
    modal.appendChild(form);
    modal.appendChild(FB)

}

export {
    createNewToDoForm,
    editToDoForm,
    newListForm
}