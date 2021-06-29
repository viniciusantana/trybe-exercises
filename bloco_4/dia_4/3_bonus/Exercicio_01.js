/*

    (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

    Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
    Dicas:
        Uma string é um array de caracteres, então cada elemento do array é uma letra.
        O valor de cada numeral romano é:

    | I   | 1    |
    | --- | ---- |
    | IV  | 4    |
    | V   | 5    |
    | IX  | 9    |
    | X   | 10   |
    | XL  | 40   |
    | L   | 50   |
    | XC  | 90   |
    | C   | 100  |
    | CD  | 400  |
    | D   | 500  |
    | CM  | 900  |
    | M   | 1000 |

    Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
    Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.
*/



function converteRomano (emRomano){
    let romanos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let emNumeros =[];
    let resultado = 0;
    for(index = 0; index < emRomano.length; index++){
        for(let key in romanos){
            if(key === emRomano[index]){
                emNumeros[index]= romanos[key];
            }
            //console.log(key, emRomano[index], romanos[key]); //Teste
        }
        //console.log(emNumeros[index]); //Teste
    }
    for(somaIndex = 0; somaIndex < emNumeros.length; somaIndex++ ){

        if(emNumeros[somaIndex] < emNumeros[somaIndex + 1]){
            resultado -= emNumeros[somaIndex];
        }else{
            resultado += emNumeros[somaIndex];
        }
        //console.log(resultado); //Teste
    }
    return resultado;
}

console.log(converteRomano('MCMXCII'));
