export class Combustivel {
  constructor(tipo, preco) {
    this._tipo = tipo;
    this.preco = preco;
  }
  getPreco() {
    return this.preco;
  }
  getTipo() {
    return this._tipo;
  }
}
