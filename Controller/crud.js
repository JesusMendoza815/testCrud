import { buildCard } from '../Models/cardStructure.js';
const url = `https://practica-crud-74892-default-rtdb.firebaseio.com/products.json`;
const id = "";

export const createProduct = (urlImg, title, description, price) => {

    const product = {
        urlImg: urlImg,
        title: title,
        description: description,
        price: price,
    };
    
    let productId  = "";
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: { 
            'Content-Type': 'application/json',
        },
    })
    .then((response) => {
        return response.json();
    })
    .then(product => {
        productId = product.name;
    })
}

export const getProducts = (container) => {
    fetch(url)
    .then((response) => response.json())
    .then((products) => {
        //console.log(products);
        for(let key in products) {
            //console.log(key);
            let urlImg = products[key].urlImg;
            let title = products[key].title;
            let description = products[key].description;
            let price = products[key].price;
            let id = key;
            container.appendChild(buildCard(urlImg, title, description, price, id));
        }
    });
}

//Delete
export const deletee = (method, id) => {
    const options = {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: 'false'
    };

    fetch(`https://practica-crud-74892-default-rtdb.firebaseio.com/products/${id}.json`, options)
        .then(response => response.json())
        .catch(err => console.error(err));
}