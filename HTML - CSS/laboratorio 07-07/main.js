const buttomCambiar = document.getElementById('btn-cambiar');
const buttomVolver = document.getElementById('btn-volver');

const divUno = document.querySelector('.uno');
const divDos = document.querySelector('.dos');
const divTres = document.querySelector('.tres');
const divContainerDos = document.querySelector('.container-2');

buttomCambiar.addEventListener('click',function(){
    divUno.style.background="#811A8F";    
    divContainerDos.style.display="block";
    divDos.style.background="#ED61FF";
    divDos.style.width="100%";
    divTres.style.background="#C93DDB";
    divTres.style.width="100%";
});

buttomVolver.addEventListener('click',function(){
    divUno.style.background="#5EB342";
    divContainerDos.style.display="flex";
    divDos.style.background="#ACFF91";
    divDos.style.width="50%";
    divTres.style.background="#99FF78";
    divTres.style.width="50%";
});