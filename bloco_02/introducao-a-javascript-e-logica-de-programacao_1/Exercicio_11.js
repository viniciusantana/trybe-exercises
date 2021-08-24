/*
 11.Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
 Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido por ela.

    >A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
        >>INSS (Instituto Nacional do Seguro Social)
            -Salário bruto até R$ 1.556,94: alíquota de 8%
            -Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
            -Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
            -Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
        >>IR (Imposto de Renda)
            -Até R$ 1.903,98: isento de imposto de renda
            -De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
            -De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
            -De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
            -Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

    >O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
    >Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
    >Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
        >>R$ 2.670,00: salário com INSS já deduzido;
        >>7.5%: alíquota de imposto de renda;
        >>R$ 142,80 parcela a se deduzir do imposto.
    >Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
    >O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? 
*/

let salarioBruto = 3000;
let salarioLiquido;
let aliquotaINSS;
let descontoINSS;
let aliquotaIRPF;
let descontoIRPF;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = 8;
    descontoINSS = salarioBruto * (aliquotaINSS / 100);
    salarioLiquido = salarioBruto - descontoINSS;
} else if (salarioBruto <= 2594.92) {
    aliquotaINSS = 9;
    descontoINSS = salarioBruto * (aliquotaINSS / 100);
    salarioLiquido = salarioBruto - descontoINSS;
} else if (salarioBruto <= 5189.82) {
    aliquotaINSS = 11;
    descontoINSS = salarioBruto * (aliquotaINSS / 100);
    salarioLiquido = salarioBruto - descontoINSS;
} else {
    aliquotaINSS = "MAX";
    descontoINSS = 570.88;
    salarioLiquido = salarioBruto;
}

console.log('Aliquota INSS: ',aliquotaINSS);
console.log('Desconto INSS: R$',descontoINSS);
/*console.log('Salário apenas com desconto do INSS' ,salarioLiquido); */

/*
>>IR (Imposto de Renda)
    -Até R$ 1.903,98: isento de imposto de renda
    -De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
    -De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
    -De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
    -Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
*/

if (salarioLiquido <= 1903.98) {
    aliquotaIRPF = 0;
    descontoIRPF = salarioLiquido * (aliquotaIRPF / 100);
    salarioLiquido -= descontoIRPF;
} else if (salarioLiquido <= 2826.65) {
    aliquotaIRPF = 7.5;
    descontoIRPF = salarioLiquido * (aliquotaIRPF / 100) - 142.80;
    salarioLiquido -= descontoIRPF;
} else if (salarioLiquido <= 3751.05) {
    aliquotaIRPF = 15;
    descontoIRPF = salarioLiquido * (aliquotaIRPF / 100) - 354.8;
    salarioLiquido -= descontoIRPF;
} else if (salarioLiquido <= 4664.68) {
    aliquotaIRPF = 22.5;
    descontoIRPF = salarioLiquido * (aliquotaIRPF / 100) - 636.13;
    salarioLiquido -= descontoIRPF;
} else {
    aliquotaIRPF = 27.5;
    descontoIRPF = salarioLiquido * (aliquotaIRPF / 100) - 869.36;
    salarioLiquido -= descontoIRPF;
}

console.log('Alíquota IRPF:' , aliquotaIRPF, '%');
console.log('Total decontado do IRPF: R$', descontoIRPF);
console.log('Salário Líquido',salarioLiquido);

/*
Resposta site:

let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));
*/
