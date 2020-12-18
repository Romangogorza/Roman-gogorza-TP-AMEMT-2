'use strict'






const agregar = document.getElementById("agregar");
  agregar.addEventListener("click", spinner);




let agregarFila = () => {
  let trEl = document.createElement('tr');
  clavesProducto.forEach( () => {
    let tdEl = document.createElement('td')
    inputEl = document.createElement('input');
    tdEl.appendChild(inputEl);
    trEl.appendChild(tdEl)
    tBodyEl.appendChild(trEl)


  })
    


    let tdEl = document.createElement('td');
    tdEl.classList = "td"
    let botonEliminar = document.createElement('button')
     botonEliminar.textContent = "eliminar";
     personas.id = botonEliminar
     botonEliminar.addEventListener('click', () => {
     
    trEl.remove(tdEl)
     })
     tdEl.appendChild(botonEliminar);
     trEl.appendChild(tdEl)
 
}







let createHeader = (claves) => {
  //claves es un array con los nombres de las claves de nuestro objeto --> ["nombre", "cantidad", "categoria", "precio", "marca"]
  let theadEl = document.createElement("thead");
  let trEl = document.createElement("tr");
  //recorremos el arreglo de claves
  for (let i = 0; i < claves.length; i++) {
    //creamos un elemento th para cada clave
    let thEl = document.createElement("th");
    //cambiamos el innerHTML del th para que muestre cada clave
    thEl.innerHTML = claves[i];
    //agregamos el elemento th al elemento tr
    trEl.appendChild(thEl);
  }
 //row para los botones
  const thOpciones=document.createElement("th");
  thOpciones.innerText= 'Opciones'
  trEl.appendChild(thOpciones)

  //agregamos el elemento tr al thead
  theadEl.appendChild(trEl);
  //agregamos el thead a nuestra tabla
  tableEl.appendChild(theadEl);

};

let createRow = (elemento) => {
  //elemento es el objeto que queremos mostrar en cada fila
  let trEl = document.createElement("tr");
  //iteramos sobre las propiedades de nuestro objeto
  for ( const clave in elemento) {
    //creamos un elemento td para cada propiedad
    let tdEl = document.createElement("td");
    //cambiamos su innerHTML para que muestre el valor de cada propiedad
    tdEl.innerHTML = elemento[clave];
    //agregamos el elemento td al elemento tr
    trEl.appendChild(tdEl);
  }

  let tdEliminaryeditar=document.createElement("td");
  let btnEliminar=document.createElement("button");
  btnEliminar.onclick=showModalEliminar
  
  let btnEditar=document.createElement("button");
  btnEditar.onclick=showModalEditar

  

  btnEditar.innerText='Editar';
  btnEliminar.innerText='Eliminar';
  tdEliminaryeditar.appendChild(btnEditar);
  
  tdEliminaryeditar.appendChild(btnEliminar);
  trEl.appendChild(tdEliminaryeditar);

  btnEditar.classList.add("btnestilo")
  
  btnEliminar.classList.add("btnestilo")
  
  btnEditar.setAttribute("id","btn-editar")
  
  btnEliminar.setAttribute("id", "btn-eliminar") 
  



  //devolvemos la fila creada
  return trEl;
};







let createBody = (elementos) => {
  //elementos es un arreglo con todos los objetos que queremos mostrar en nuestra tabla [{}, {}, {}]
  let tbodyEl = document.createElement("tbody");
  for (let i = 0; i < elementos.length; i++) {
    //recorremos el arreglo de objetos e invocamos la función de crear fila para cada uno de ellos
    //la función nos devuelve un elemento tr y lo agregamos a nuestro elemento tbody
    tbodyEl.appendChild(createRow(elementos[i]));
  }
  //agregamos el elemento tbody a nuestro elemento tabla
  tableEl.appendChild(tbodyEl);
};







 



window.addEventListener("load", () => {
  createHeader(clavesProducto);
  createBody(dataParseada.jugadores);
});




