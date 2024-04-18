/**VARIABLES */

window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div"); //Crea una variable la cual es un elemento div
    label.className = "label"; //Le asigna nombre de claseal elemento creado
    label.textContent = name; // le agrega contenido al elemento con el paramentro de la funcion interna
    container.appendChild(label); // agrega el elmento creado al div container
  };
};
