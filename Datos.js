export default class Datos {
    constructor(inferior, superior) {
        this._inferior = inferior;
        this._superior = superior;
        
    }

    get inferior() {
        return this._inferior;
    }

    get superior() {
        return this._superior;
    }

    getMitad() {
    let mitad = (Number(this._inferior) + Number(this._superior)) / 2;

        return mitad;
    }

    getFx() {
    document.querySelector("#eq");
    let eq = document.querySelector('#eq').value;
    let fx = eq + 1;
        return fx;
    }
}