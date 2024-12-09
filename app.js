import { liTransacciones } from "./ui.js";
import { formDates } from "./formInfo.js";

let containerHistorial = document.querySelector('#registroHistorial');
const btnAgregarTransferencia = document.querySelector('#addBtn');
const formularioTransferencia = document.querySelector('#formTransferencia');

let transacciones = [{tipo: "ingreso", monto: "10", categoria: "ingreso 1 . ", descripcion: "asdasdasd"},
                    {tipo: "ingreso", monto: "10", categoria: "ingreso 2 . ", descripcion: "asdasdasd"},
                    {tipo: "gasto", monto: "20", categoria: "gasto 1 . ", descripcion: "asdasdasd"},
                    {tipo: "gasto", monto: "20", categoria: "gasto 2 . ", descripcion: "asdasdasd"}
];

const historialCards = []

const btnContainer = document.querySelector('#historial')
const btnChangeViews = btnContainer.querySelectorAll('.btnViews')

// permitir elegir que ver y eliminar clase no vista :)
btnChangeViews.forEach((item)=>{
    const btnChange = item.parentElement
    let sectionChecked = item.parentElement
    btnChange.addEventListener('click', ()=>{
        const btnClick = (item)
        let newSectionChecked = item.parentElement

        sectionChecked.classList.remove('active')
        newSectionChecked.classList.add('active')
        
        switch (btnClick){
            case 'todos':{
                containerHistorial.innerHTML = '';
                transacciones.forEach((t) => {const cartas = mostrarTransacciones(t, 'todos');}); 
                break
            }
            case 'ingreso':{
                containerHistorial.innerHTML = '';
                transacciones.forEach((t) => {const cartas = mostrarTransacciones(t, 'ingreso');}); 
                break
            }
            case 'gasto':{
                containerHistorial.innerHTML = '';
                transacciones.forEach((t) => {const cartas = mostrarTransacciones(t, 'gasto');}); 
                break
            }
        }
    })
})

function mostrarTransacciones(transaccion, opcion) {
    const card = (transaccion.tipo === opcion || opcion === 'todos') ? liTransacciones(transaccion) : null; // if (muestra un tipo o todos los tipos) -> true: Crea la Carta. false: Devuelve null

    if (card) containerHistorial.append(card) 


    funcionesCards(card, transaccion)

    return card;
}

function funcionesCards(historialCard, transaccion) {
    if (!historialCard) {return;}
    const btnDelete = historialCard.querySelector('.deleteCard');
    btnDelete.addEventListener('click', () => {
        const index = transacciones.findIndex(t => t.descripcion === transaccion.descripcion && t.monto === transaccion.monto && t.tipo === transaccion.tipo);
        if (index !== -1) {
            transacciones.splice(index, 1);
        }
        historialCard.remove();
    });
}




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
                break;}
            case 'gasto': {
                transacciones.push(formInfo); 
                break;}
            case 'default':{console.log(nada)}}
        const cartas = mostrarTransacciones(formInfo, 'todos')
        btnClose.click()
        ;
    });

});

