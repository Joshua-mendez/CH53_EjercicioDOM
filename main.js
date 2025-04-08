let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");// a todas las variables se les asigna el valor de una etiqueta de HTML por medio del id
let encabezado2 = document.getElementById("encabezado2");

let lista = document.getElementsByTagName("ul");// se le asigna el valor a una varibale y su valor es el nombre de la etiqueta
let elementos = document.getElementsByClassName("list-group-item");// a la varibale se le asigna el valor de un grupo de elementos con class

let otroElemento = document.querySelector("ul>li");//primer elemento dentro de "ul"

let otrosElementos = document.querySelectorAll("ul>li");// la variable toma el valor de todas las etiquetas de "li" dentro de "ul"

console.log(otrosElementos.length);//muestra cuantos elementos hay de la variable otrosElementos(li)
console.log("otro elemento", otroElemento);//muestra el primer elemento de la variable seleccionada

console.log(lista.length);//muestra el numero de listas que contiene la variable (2)
console.log(lista.item(1));//muestra el elemento con el indice seleccionado de la variable lista 

console.log(elementos.item(2));//igual muestra el elemento con el inidice seleccionado
console.log(elementos.length);//10

encabezado1.innerText = "Ejercicio DOM"// Modifica el texto que tiene la variable encabezado1
encabezado1.innerHTML = "<em>Ejercicio</em> DOM";// Modifica el codigo del HTML añadiendo alguna etiqueta que nosotros creemos como el "<em>"
encabezado2.innerText = "DOM Exercise";

btnMostrar.addEventListener("click", function(event){//Eventos en este caso con click con una funcion para realizar ciertas acciones que se muestran dentro de este
  event.preventDefault();// no hagas lo que haces por defecto
  
  let element = document.createElement("li");//se crea una variable para crear en el documento una etiqueta li
  element.innerText="Another item";//<li>Another item</li>
  element.classList.add("list-group-item");//crea la lista con la clase para ponerla dentro del cuadro

  let element2 = element.cloneNode(true);//se crea una variable con el valor de clonar a la variable element con todas sus especificaciones

  // Before: inserta el elemento antes de la lista
  lista.item(0).before(element);
  // Prepend: inserta el elemento dentro de la lista
  lista.item(0).prepend(element2);
  // Append: inserta el elemento dentro al final de la lista
  lista.item(0).append(element);
  //After: inserta el elemento fuera y despues de la lista
  lista.item(0).after(element2);

});