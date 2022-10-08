import { createProduct, getProducts, deletee} from "../Controller/crud.js";

document.addEventListener("DOMContentLoaded", function() {

    const container = document.querySelector("#cards-container");
    const urlImgElement = document.querySelector("#urlImg-input");
    const titleElement = document.querySelector("#title-input");
    const descriptionElement = document.querySelector("#description-input");
    const priceElement = document.querySelector("#price-input");
    
    const getData = ()=> {
    
        const urlImg = urlImgElement.value;
        const title = titleElement.value;
        const description = descriptionElement.value;
        const price = priceElement.value;
    
        createProduct(urlImg, title, description, price);
    
        urlImgElement.reset();
        titleElement.reset();
        descriptionElement.reset();
        priceElement.reset();
    };
    
    const btnCreate = document.querySelector("#btnCreate");
    
    btnCreate.addEventListener("click", getData);
    
    getProducts(container);
    //UPDATE or EDIT
    const btnsEdit = document.getElementsByClassName("btnEdit");

    //delete
    let btnDelete = document.getElementsByClassName("btnDelete");
    setTimeout(function () {
        for (const btn in btnDelete) {
            btnDelete[btn].addEventListener("click", () => {
                deletee('DELETE', btnDelete[btn].id);
            });
        }
    }, 500);
});
