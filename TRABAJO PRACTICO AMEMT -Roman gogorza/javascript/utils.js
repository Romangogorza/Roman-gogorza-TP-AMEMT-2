let tableEl = document.getElementById("tabla");
let tituloModalEL = document.getElementById("tituloModal");
let titulo = document.getElementById("tituloModall");
const mensaje=document.getElementById('mensajeModal');
const aceptar=document.getElementById('btn-si');
const cancelar=document.getElementById('btn-no');
progressBar=document.getElementById("progressBar");

const overlayEl=document.getElementById('overlay');








//data en formato JSON
let data = `{
    "jugadores": [
      {
        "Puesto": "1",
        "Nombre": "Kylian Mbappe",
        "Equipo": "PSG",
        "Nacionalidad":"Francia",
        "Valor": "180.M"
      },
      {
        "Puesto": "2",
        "Nombre": "Raheem Sterling",
        "Equipo": "Man.City",
        "Nacionalidad":"Inglaterra",
        "Valor": "128.M"
      },
      {
        "Puesto": "3",
        "Nombre": "Neymar.Jr",
        "Equipo": "PSG",
        "Nacionalidad":"Brazil",
        "Valor": "128.M"
      },
      {
        "Puesto": "4",
        "Nombre": "Sadio Mané",
        "Equipo": "Liverpool",
        "Nacionalidad":"Senegal",
        "Valor": "120.M"
      },
      {
        "Puesto": "5",
        "Nombre": "Mohamed Salah",
        "Equipo": "Liverpool",
        "Nacionalidad":"Egipto",
        "Valor": "120.M"
      },
      {
        "Puesto": "6",
        "Nombre": "Harry Kane",
        "Equipo": "Tottenham",
        "Nacionalidad":"Inglaterra",
        "Valor": "120.M"
      },
      {
        "Puesto": "7",
        "Nombre": "Kevin De Bruyne",
        "Equipo": "Man.City",
        "Nacionalidad":"Belgica",
        "Valor": "120.M"
      },
      {
        "Puesto": "8",
        "Nombre": "Trent Alexander-Arnold",
        "Equipo": "Liverpool",
        "Nacionalidad":"Inglaterra",
        "Valor": "110.M"
      },
      {
        "Puesto": "9",
        "Nombre": "Joao Felix",
        "Equipo": "Atlético Madrid",
        "Nacionalidad":"Portugal",
        "Valor": "100.M"
      },
      {
        "Puesto": "10",
        "Nombre": "Erling Haaland",
        "Equipo": "Borrusia Dortmund",
        "Nacionalidad":"Noruega",
        "Valor": "100.M"
      }
    ]
  }
`






//convertimos la data en formato JSON a un objeto JS para poder acceder a sus propiedades
let dataParseada = JSON.parse(data);

let clavesProducto = Object.keys(dataParseada.jugadores[0]);



let spinner = () => {

  const barraSpinner = document.getElementById("boton-cargar");
  barraSpinner.classList.toggle("visible");
 
  setTimeout(mostrarFila, 2500);   
 
 
  }




let mostrarFila = () =>{


puestoModal = document.getElementById("puestoModal");
nombreModal = document.getElementById("nombreModal");
equipoModal= document.getElementById("equipoModal");
nacionModal = document.getElementById("nacionModal");
valorModal= document.getElementById("valorModal");


let nuevaFila = document.createElement("tr");
nuevaFila.classList.add("td")

 
let nuevaCelda = document.createElement("td");
nuevaCelda.classList.add("td")
nuevaCelda.innerText= puestoModal.value;


let nuevaCelda2 = document.createElement("td");
nuevaCelda2.classList.add("td")
nuevaCelda2.innerText= nombreModal.value;

let nuevaCelda3 = document.createElement("td");
nuevaCelda3.classList.add("td")
nuevaCelda3.innerText= equipoModal.value;

let nuevaCelda4 = document.createElement("td");
nuevaCelda4.classList.add("td")
nuevaCelda4.innerText= nacionModal.value;

let nuevaCelda5 = document.createElement("td");
nuevaCelda5.classList.add("td")
nuevaCelda5.innerText= valorModal.value;

let nuevaCelda6 = document.createElement("button");
nuevaCelda6.setAttribute("id", "btn-editar")
nuevaCelda6.classList.add("td","btnestilo")
nuevaCelda6.innerText= "Editar"

let nuevaCelda7 = document.createElement("button");
nuevaCelda7.setAttribute("id", "btn-eliminar")
nuevaCelda7.classList.add("td","btnestilo")
nuevaCelda7.innerText= "Eliminar"

spinner= document.getElementById("boton-cargar")
spinner.classList.remove("visible");


tableEl.appendChild(nuevaFila)
nuevaFila.appendChild(nuevaCelda)
nuevaFila.appendChild(nuevaCelda2)
nuevaFila.appendChild(nuevaCelda3)
nuevaFila.appendChild(nuevaCelda4)
nuevaFila.appendChild(nuevaCelda5)
nuevaFila.appendChild(nuevaCelda6)
nuevaFila.appendChild(nuevaCelda7)


}


function showModalEliminar(index) {
  titulo.innerHTML= "Eliminando";
  mensaje.innerHTML= "¿Esta seguro?";
  aceptar.innerHTML= "Aceptar";
  cancelar.innerHTML= "Cancelar";
  aceptar.addEventListener("click",()=>{eliminarDato(index)},{ once: true });
  cancelar.addEventListener("click",cancelarModal, { once: true });
  overlayEl.classList.remove('display-none');
}

// funcion que elimina con demora de dos segundos
function eliminarDato (index) {
  cancelar.removeEventListener("click",cancelarModal, { once: true });
  progressBar.classList.add('final');
setTimeout(()=>{
  overlayEl.classList.add('display-none');
  progressBar.classList.remove('final');
  jugadores.removeChild(index);
  },1000);
}

// funcion cancelar
function cancelarModal() {
  overlayEl.classList.add('display-none')
  aceptar.removeEventListener("click",()=>{eliminarDato(fila)},{ once: true });
}

//modal para cuando se edita
function showModalEditar(fila) {
  titulo.innerHTML= "Editando...";
 
  let formulario=document.createElement("form");
  formulario.classList.add('container', 'padding', 'margen');
  mensaje.appendChild(formulario);
  // input dinamicamente
       let puesto=document.createElement("INPUT");
       puesto.setAttribute("type", "number");
       puesto.setAttribute("required", "true"); 
       puesto.value=fila.cells[0].innerHTML;
       puesto.classList.add('margen');
       formulario.appendChild(puesto);
       let nombre=document.createElement("INPUT");
       nombre.setAttribute("type", "text");
       nombre.value=fila.cells[1].innerHTML;
       nombre.classList.add('margen');
       formulario.appendChild(nombre);
       let equipo=document.createElement("INPUT");
       equipo.setAttribute("type", "text");
       equipo.value=fila.cells[2].innerHTML;
       equipo.classList.add('margen');
       formulario.appendChild(equipo);
       let nacion=document.createElement("INPUT");
       nacion.setAttribute("type", "text");
       nacion.value=fila.cells[3].innerHTML;
       nacion.classList.add('margen');
       formulario.appendChild(nacion);
       let valor=document.createElement("INPUT");
       valor.setAttribute("type", "text");
       valor.value=fila.cells[4].innerHTML;
       valor.classList.add('margen');
       formulario.appendChild(valor);
  aceptar.innerHTML= "Aceptar";
  cancelar.innerHTML= "Cancelar";
  overlayEl.classList.remove('display-none');
  aceptar.addEventListener("click",()=>{modificarDato (puesto,nombre,equipo,nacion,valor)}, { once: true });
  cancelar.addEventListener("click",()=>overlayEl.classList.add('display-none'), { once: true });
}

// funcion que modifica el dato en la tabla
function modificarDato (puesto,nombre,equipo,nacionalidad,valor) {
  progressBar.classList.add('final');
  
    setTimeout(()=>{
      overlayEl.classList.add('display-none');
      progressBar.classList.remove('final');
      fila.cells[0].innerHTML=puesto.value;
      fila.cells[1].innerHTML=nombre.value;
      fila.cells[2].innerHTML=equipo.value;
      fila.cells[3].innerHTML=nacionalidad.value;
      fila.cells[4].innerHTML=valor.value;

    },2000);   
  }
  