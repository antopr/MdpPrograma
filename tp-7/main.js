const btnAgregar = document.getElementById('btn-agregar');
const btnEliminar = document.getElementById('btn-eliminar');
const agregoItem = document.getElementById('item');


btnAgregar.addEventListener('click', function(){
    //let inputValue = document.querySelectorAll('.input-form');
    let inputValue = document.getElementById('name').value;
    agregoItem.innerHTML = inputValue;
    btnEliminar.classList.remove("invisible");
});

btnEliminar.addEventListener('click', function(){
    agregoItem.remove()
    btnEliminar.classList.add("invisible");
});