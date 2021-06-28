let n = 5;
let simbolo = '*';
let vazio = ' ';
let metadeLinha = Math.trunc(n/2);
let topoPiramide = 1;
//console.log(metadeLinha);

//Faz uma piramide baseada em números impares
for (let index = 0; index < n; index++){
    let linha = '';
    //adiciona espaços em branco para que o simbolo fique na "metadeLinha"
    for(let indexVazio = 0; indexVazio < metadeLinha; indexVazio++){
        linha += vazio;
    }
    metadeLinha--;
    //Adiciona a quantidade de asteriscos a começar do topo da piramide 
    for(let piramide = 0 ; piramide < topoPiramide; piramide++){
        linha += simbolo;
    }
    topoPiramide += 2;
    console.log(linha);
    if(topoPiramide > n){
        break;
    }
}
