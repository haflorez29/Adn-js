const Adn = [];
const button = document.querySelector(".cadena_adn");

const arregloAdn = (event) => {
  var proteina = document.querySelector(".ingreso").value;
  if (proteina.trim() != "" && proteina.length == 1) {
    if (Adn.length < 5) {
      Adn.push(proteina.toUpperCase());
      document.querySelector(".ingreso").value = "";
      console.log("proteina registrada");
      if (Adn.length === 5) {
        var error = ValidaSecuencia();
        if (error != 5) {
          console.log(
            "Error en la secuencia. Hay valores que no corresponden a las proteínas válidas")
        }else {
          console.log (CuentaProteinas())
        }
      }
    } else {
      console.log("ya se registro la cadena de proteinas");
    }
  } else {
    console.log("debe ingresar un valor de proteina valido");
  }
};

let ValidaSecuencia = () => {
  var contador_proteinas = 0;
  Adn.forEach((element, index) => {
    if (
      element === "A" ||
      element === "G" ||
      element === "C" ||
      element === "T"
    ) {
      contador_proteinas += 1;
    }
  });
  return contador_proteinas;
};

let CuentaProteinas = () => {
  var valoresProteina = [
    {  adenina : 0},
    {  citosina : 0},
    {  guanina : 0},
    {  timina : 0}
];
  Adn.forEach((element, index) =>{
  if (element === "A"){
    valoresProteina[0].adenina += 1; 
  }else if ( element === "C" ) {
    valoresProteina[1].citosina += 1;
  }else if ( element === "G" ) {
    valoresProteina[2].guanina += 1;
  }else if ( element === "T" ) {
    valoresProteina[3].timina += 1;
  }
})
  return valoresProteina
}

button.addEventListener("click", arregloAdn);

