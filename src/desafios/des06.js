// Desafio de Código: Combinando Nomes de Pokémons

// Definindo a função combinandoNomesPokemons
function combinandoNomesPokemons(palavra) {
    // Concatena o prefixo com o sufixo "saur"
    var palavraPokemon = palavra + "saur";
    return palavraPokemon;
}

// Entrada da palavra usando o gets():
var nomeEntrada = gets();

// Chamando a função "combinandoNomesPokemons" com o nome informado:
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo a palavra gerada:
print(palavraGerada);