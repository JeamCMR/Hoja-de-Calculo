/**VARIABLES */

const range = (start,end) => Array(end - start + 1).fill(start).map((element,index)=> element + index); //Crea un array de numeeros 

const charRange = (start,end) => 
range(start.charCodeAt(0),end.charCodeAt(0)).map(code => String.fromCharCode(code)); //Rango de letras

window.onload = () => {
 
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div"); //Crea una variable la cual es un elemento div
    label.className = "label"; //Le asigna nombre de claseal elemento creado
    label.textContent = name; // le agrega contenido al elemento con el paramentro de la funcion interna
    container.appendChild(label); // agrega el elmento creado al div container
  };
  const letters = charRange("A","J");
  letters.forEach(createLabel)
  range(1,99).forEach(number =>{
    createLabel(number)
    letters.forEach(letter => {
      const input = document.createElement("input");
      input.type ="text";
      input.id = letter + number;
      input.ariaLabel = letter + number;
      container.appendChild(input)
    });
  });
};





