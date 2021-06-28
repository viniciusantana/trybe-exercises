//1.Crie um objeto player contendo as variáveis listadas
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
};
console.table(player);
//2.Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: 
//"A jogadora Marta Silva tem 34 anos de idade". 
console.log('A jogadora ', player.name, player.lastName, 'tem', player.age, 'anos de idade.');

//3.Adicione ao objeto a chave bestInTheWorld e atribua a esta chave 
//um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo
//let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(player);