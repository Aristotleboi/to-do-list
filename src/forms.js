const createNewToDoForm = () => {
    let content = document.querySelector('.content')
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
    form.appendChild(FB);
    content.appendChild(form);
}

export {createNewToDoForm}