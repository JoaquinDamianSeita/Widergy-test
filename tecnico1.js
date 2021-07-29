function FormatString(sentence) {
  //variable para el resultado de la funcion
  let result = [];

  //usaria un bucle for, es mas facil de controlar que un while
  for (let i = 0; i < sentence.length; i++) {
    // variable para almacenar el valor ASCII de los caracteres
    let asciiValue = sentence[i].charCodeAt(0);

    //validaciones sobre los caracteres permitidos
    if (
      (asciiValue >= 65 && asciiValue <= 90) ||
      (asciiValue >= 48 && asciiValue <= 57) ||
      //agrego la validacion para las letras en minuscula
      (asciiValue >= 97 && asciiValue <= 122) ||
      asciiValue === 32 ||
      asciiValue === 45 ||
      //agrego esta validacion para el _ que no estaba en el codigo anterior
      asciiValue === 95
    ) {
      // almaceno el caracter permitido en el array
      result.push(sentence[i]);
    }
  }

  //evaluo si el array tiene contenido antes de devolverlo como string
  if (result.length === 0) {
    return "NA";
  } else {
    return result.join("").toString();
  }
}

function Ejemplos() {
  console.log(FormatString("Hola 12 como estas?"));
  console.log(FormatString("12-07_1 se permiten estos caracteres especiales"));
  console.log(FormatString("&%$·"));
}

Ejemplos();
