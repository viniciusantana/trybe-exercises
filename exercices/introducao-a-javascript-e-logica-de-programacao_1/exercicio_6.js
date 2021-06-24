/*

    6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

    >Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas
     quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
    >Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas 
    (lower case) .
    >Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
    >Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let a = "Queen";

switch (a.toLowerCase()) {
    case "king":
        console.log("Move (or capture) one square in any direction");
        break;
    case "queen":
        console.log("It can move as many squares as it likes left or right horizontally");
        break;
    case "bishops":
        console.log("Diagonally as many squares as it likes, as long as it is not blocked by its own pieces or an occupied square");
        break;
    case "knights":
        console.log("L-shape");
        break;
    case "rook":
        console.log("It can move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically ");
        break;
    case "pawn":
        console.log("Move (or capture) one square in any direction");
        break;
}
