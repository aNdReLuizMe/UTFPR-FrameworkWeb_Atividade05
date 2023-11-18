export class Posto {
  constructor(nome, gasolina, etanol) {
    this.nome = nome;
    this.gasolina = gasolina;
    this.etanol = etanol;
  }
  sugereCombustivel() {
    if (isNaN(this.etanol.getPreco()) || isNaN(this.gasolina.getPreco())) {
      return "Por favor, insira valores numéricos para o preço do etanol e da gasolina.";
    }
    const relacaoPreco = this.etanol.getPreco() / this.gasolina.getPreco();
    const economia = ((1 - relacaoPreco) * 100).toFixed(2);
    if (relacaoPreco < 0.7) {
      return `Abasteça com ${this.etanol.getTipo()}. Você economizará ${economia}% em comparação com ${this.gasolina.getTipo()}.`;
    } else {
      return `Abasteça com ${this.gasolina.getTipo()}. Você economizará ${economia}% em comparação com ${this.etanol.getTipo()}.`;
    }
  }
}
