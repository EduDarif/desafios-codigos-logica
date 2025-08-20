// Desafio de Código: Gerenciamento de Itens Mágicos

// Definição da classe ItemMagico
class ItemMagico {
  // Construtor recebendo os atributos
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }

  calcularDano() {
    // Se o tipo for "arma", o dano é dobrado
    return this.tipo.toLowerCase() === 'arma' ? this.dano * 2 : this.dano;
  }
}

// Solicita ao usuário para digitar o tipo do item mágico, o dano e a resistência
const tipoItem = gets();
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());

// Criação do objeto ItemMagico personalizado
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// Impressão dos atributos do item personalizado
print("Tipo: " + itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistencia);

// Calcula e imprime o dano causado pelo item personalizado em um combate simulado
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);