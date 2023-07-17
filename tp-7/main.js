const inputItems = document.getElementById('inputItems');
const btnAgregar = document.getElementById('btnAgregar');
const listItems = document.getElementById('listItems');

btnAgregar.addEventListener('click', function(){
    const divElement = document.createElement("div");
        divElement.className = "col my-4 d-flex justify-content-center align-content-cente align-items-center";
    const pElement = document.createElement("p");
        pElement.className = "me-5";
    const buttonElement = document.createElement("button");
        buttonElement.innerText = "Eliminar";
        buttonElement.className = "btn btn-danger";

    pElement.innerText = inputItems.value;
    divElement.appendChild(pElement);
    divElement.appendChild(buttonElement);
    listItems.appendChild(divElement);

    buttonElement.addEventListener('click',function(){
        divElement.remove();
    });

    inputItems.focus();
    inputItems.value="";
});
