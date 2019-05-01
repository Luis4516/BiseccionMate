

  function draw() {
    try {
      functionPlot({
        target: '#plot',
        data: [{
          fn: document.getElementById('eq').value,
          sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js
          graphType: 'polyline'
        }]
      });
    }
    catch (err) {
      console.log(err);
      alert(err);
    }
  }

  document.getElementById('form').onsubmit = function (event) {
    event.preventDefault();
    draw();
  };

  draw();

import Aprox from "./Aprox.js"
import Datos from "./Datos.js"  

class Main {
    constructor() {
        let aprox = new Aprox(
            document.querySelector('#proceso'),
            );
        
        document.querySelector('#calcular').addEventListener('click', () => {  //Arrow function
            let inferior = document.querySelector('#inferior').value;
            let superior = document.querySelector('#superior').value;

            let datos = new Datos(inferior, superior);
            aprox.addDatos(datos);
        });
    }
}

let m = new Main();