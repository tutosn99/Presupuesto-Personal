import { liTransacciones } from "./ui.js";
import { formDates } from "./formInfo.js";

let transacciones = [
    { tipo: 'ingreso', monto: 5000, categoria: 'ingreso', descripcion: 'pizza' },
    { tipo: 'ingreso', monto: 3000, categoria: 'ingreso', descripcion: 'salario' },
    { tipo: 'gasto', monto: 1500, categoria: 'gasto', descripcion: 'alquiler' },
];

const containerHistorial = document.querySelector('#registroHistorial');
const btnAgregarTransferencia = document.querySelector('#addBtn');
const formularioTransferencia = document.querySelector('#formTransferencia');

function renderizarCards(datos) {
    const card = liTransacciones(datos);
    containerHistorial.append(card);
    return card
}

function mostrarTransacciones(transaccion, opcion) {
    let card = renderizarCards(transaccion)
    if (transaccion.tipo !== opcion){return null} // Previene devolver Undefined
    return card
}

transacciones.forEach((item) => {const cartas = mostrarTransacciones(item, 'ingreso');}); // Muestra las transferencias disponibles


btnAgregarTransferencia.addEventListener('click', () => {
    if (formularioTransferencia.classList.contains('active')) { return; }

    formularioTransferencia.classList.add('active'); 
    btnClose = formularioTransferencia.querySelector('span[value="btnClose"]')
    btnClose.addEventListener('click', ()=>{formularioTransferencia.classList.remove('active'); })


    const formContainer = document.querySelector("#transaccion-form"); // Form contenedor
    formContainer.addEventListener("submit", (event) => { 
        event.preventDefault();
        const formInfo = formDates();
        const transferenciaTipo = formInfo.tipo;
        switch (transferenciaTipo) {
            case 'ingreso': {
                transacciones.push(formInfo);   
                break;
                
            }

            case 'gasto': {
                transacciones.push(formInfo); 
                break;
            }
        }
        const cartas = mostrarTransacciones(formInfo, 'ingreso');
    });

});
