export const buildCard = (urlImg, title, description, price, id) => {
    const cardStructure = document.createElement('div');
    const cardLink = document.createElement('a');
    const cardImg = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const cardDescription = document.createElement('p');
    const cardPrice = document.createElement('p');
    const cardBtnsContainer = document.createElement('div');
    const cardBtnDelete = document.createElement('button');
    const cardBtnEdit = document.createElement('button');

    cardStructure.classList.add('card', 'col-3');
    cardImg.classList.add('card-img-top');
    cardBody.classList.add('card-body');
    cardTitle.classList.add('card-title');
    cardDescription.classList.add('card-text');
    cardPrice.classList.add('card-text','card-price');
    cardBtnsContainer.classList.add('d-flex', 'justify-content-evenly');
    cardBtnDelete.classList.add('btn','btn-danger','btnDelete');
    cardBtnEdit.classList.add('btn', 'btn-warning','btnEdit');

    cardStructure.setAttribute('style', 'width: 18rem;');
    cardImg.setAttribute('src', urlImg);
    cardBtnDelete.setAttribute('id', id);
    cardBtnEdit.setAttribute('id', id);

    cardTitle.textContent = title;
    cardDescription.textContent = description;
    cardPrice.textContent = price;
    cardBtnDelete.textContent = 'Delete';
    cardBtnEdit.textContent = 'Editar';

    cardStructure.appendChild(cardLink);
    cardLink.appendChild(cardImg);
    cardStructure.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardBtnsContainer);
    cardBtnsContainer.appendChild(cardBtnDelete);
    cardBtnsContainer.appendChild(cardBtnEdit);

    return cardStructure;
}