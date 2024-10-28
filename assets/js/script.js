let listaNom=[];
let listaGastos=[]; 
let listafechaGastos=[];

// ESta funcion se invoca cuando el usuario hace click en el boton
function clickBoton(){
    let nomGasto=document.getElementById('nombreGasto').value;
    let valorGasto=document.getElementById('valorGasto').value;
    let fechaGastos=document.getElementById('fechagasto').value;

    console.log(nomGasto);
    console.log(valorGasto);

    listaNom.push(nomGasto);
    listaGastos.push(valorGasto);
    listafechaGastos.push(fechaGastos);

    console.log(listaNom);
    console.log(listaGastos);
    console.log(listafechaGastos);
    // alert('Click del usuario')
    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElement = document.getElementById('listaDeGastos');
    const totalGastoshtml=document.getElementById('totalGastos');
    let htmlLista='';
    let totalGastos=0;
    listaNom.forEach((elemento,posicion)  => {
        const valorG=listaGastos[posicion] ;
        const fechaCadena=listafechaGastos[posicion];

            const [dia, mes, anio]=fechaCadena.split('-');
            const fechaP=new Date(dia, mes-1, anio);

        const fechaFormateada = fechaP.toLocaleDateString();
        htmlLista+=`<li id="gasto"><p>${elemento}</p><p>$ ${valorG}</p><p>Fecha: ${fechaFormateada}</p>
                    <div id="boton">
                    <button onclick="eliminarGasto(${posicion});" id="Eliminar" class="bot"><img src="assets/img/eliminar.png" alt="Eliminar" height="40"></button>
                    <button onclick="modificarGasto(${posicion})" id="Modificar" class="bot"><img src="assets/img/editar.png" alt="Eliminar" height="40"></button>
                    </div>
                    </li>`
        // console.log(elemento);
        // console.log(posicion);


        //Calculamos el total de gastos
        totalGastos+= Number(valorG.replace(/\./g, ''));

    });
    listaElement.innerHTML=htmlLista;
    totalGastoshtml.innerHTML=totalGastos;
    Limpiar();
}

function Limpiar(){
    document.getElementById('nombreGasto').value='';
    document.getElementById('valorGasto').value='';
}

function eliminarGasto(posicion){
    listaNom.splice(posicion,1);
    listaGastos.splice(posicion,1);
    actualizarListaGastos();
}

let nom=document.getElementById('nombreGasto');
let valor=document.getElementById('valorGasto');
let fecha=document.getElementById('fechagasto');


function modificarGasto(posicion){
    document.getElementById('nombreGasto').value = listaNom[posicion];
    document.getElementById('valorGasto').value = listaGastos[posicion];
    document.getElementById('fechagasto').value = listafechaGastos[posicion];


    nom.style.border='2px solid red';
    nom.style.boxShadow = '0px 0px 20px red';
    valor.style.border='2px solid red';
    valor.style.boxShadow = '0px 0px 20px red';
    fecha.style.border='2px solid red';
    fecha.style.boxShadow = '0px 0px 20px red';

    document.getElementById("botonFormulario").style.display='none';

    const botonSiExiste=document.getElementById('Confirmar');
    if(botonSiExiste){
        botonSiExiste.remove();
    }

    const listaElement=document.getElementById('selecc');
    const botonConf=document.createElement('button');
    botonConf.id='Confirmar';
    botonConf.innerHTML='<img src="assets/img/confirmar.png" alt="Confirmar" height="30">';
    botonConf.onclick=function(){
        confirmarModificacion(posicion);
    };
    listaElement.appendChild(botonConf);
}

function confirmarModificacion(posicion){
    const nuevoGasto=document.getElementById('nombreGasto').value;
    const nuevoValor=document.getElementById('valorGasto').value;
    const nuevaFecha=document.getElementById('fechagasto').value;

    nom.style.border='none';
    nom.style.boxShadow = 'none';
    valor.style.border='none';
    valor.style.boxShadow = 'none';
    fecha.style.border='none';
    fecha.style.boxShadow = 'none';


    listaNom[posicion]=nuevoGasto;
    listaGastos[posicion]=nuevoValor;
    listafechaGastos[posicion]=nuevaFecha;

    document.getElementById('Confirmar').remove();

    document.getElementById("botonFormulario").style.display='inline';

    actualizarListaGastos();
}