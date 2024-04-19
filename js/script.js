/**VARIABLES */

const infixToFunction  = {}

//Validar si un numero es par o impar, devuelve un boolean
const isEven = (num) => num % 2 === 0 ? true : false

//Funcion suma
const sum = (nums) =>
  nums.reduce((acomulador, valorActual) => acomulador + valorActual, 0);

//Calcular promedio de los elementos de un array
const average = (nums) => sum(nums) / nums.length;


//Calcular la media de los elementos de un array
const median = (nums) => {
  const sorted = nums.slice().sort((a,b)=> a - b);
  const length =  sorted.length;
  const middle  = length/ 2 - 1;
  return isEven(length)? average([sorted[middle] , sorted[middle + 1]]) 
    : sorted[Math.ceil(middle)];  
}

//Funciones de hoja de calculo
const spreadsheetFunctions = {
  sum,
  average,
  median,
};

//funcion generar rango de numero
const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((element, index) => element + index); //Crea un array de numeros

//funcion generar rango de letras
const charRange = (start, end) =>
  range(start.charCodeAt(0), end.charCodeAt(0)).map((code) =>
    String.fromCharCode(code)
  ); //Rango de letras



  //Funcion para evaluar el la entrada de texto
  const evalFormula = (x,cells) =>{
    const idToText = (id) => cells.find((cell) => cell.id === id).value;
    const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
    const rangeFromString = (num1,num2) => range(parseInt(num1),parseInt(num2));
    const elemValue = num => character => idToText(character + num);
    const addCharacters = character1 => character2 => num => charRange(character1, character2).map(elemValue(num));
    const rangeExpanded = x.replace(rangeRegex, (_match, char1, num1, char2, num2) => rangeFromString(num1, num2).map(addCharacters(char1)(char2)));
    const cellRegex = /[A-J][1-9][0-9]?/gi;
    const cellExpanded = rangeExpanded.replace(cellRegex, match => idToText(match.toUpperCase()));
  }


window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div"); //Crea una variable la cual es un elemento div
    label.className = "label"; //Le asigna nombre de claseal elemento creado
    label.textContent = name; // le agrega contenido al elemento con el paramentro de la funcion interna
    container.appendChild(label); // agrega el elmento creado al div container
  };
  const letters = charRange("A", "J");
  letters.forEach(createLabel);
  range(1, 99).forEach((number) => {
    createLabel(number);
    letters.forEach((letter) => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;

      input.onchange = update;
      container.appendChild(input);
    });
  });
};


const update = (event) =>{
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value.charAt(0) === "=") {
    
  }
}