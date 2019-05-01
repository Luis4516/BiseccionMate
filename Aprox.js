export default class Aprox {
    constructor(tableProceso) {
        this._tableProceso = tableProceso;
        this._numIter = 0;
    }

    addDatos(datos) {
        this._numIter++;

        let row = this._tableProceso.insertRow(-1);
        let cellIter = row.insertCell(0);
        let cellInferior = row.insertCell(1);
        let cellSuperior = row.insertCell(2);
        let cellAp = row.insertCell(3);
        let cellFx = row.insertCell(4);

        cellInferior.innerHTML = datos.inferior
        cellSuperior.innerHTML = datos.superior
        cellIter.innerHTML = this._numIter;
        cellAp.innerHTML = datos.getMitad();
        cellFx.innerHTML = datos.getFx();

    }
}