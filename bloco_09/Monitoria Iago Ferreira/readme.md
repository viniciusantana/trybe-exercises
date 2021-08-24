# Exercicios

1. Crie uma promise onde dois números são sorteados entre 0 e 10, independentes um do outro, e após 2 segundos compare o primeiro número com o segundo número

* Caso o primeiro número seja maior, use o resolve para mostrar no console "Número 1 é maior"
* Caso o segundo número seja maior, use o resolve para mostrar no console "Número 2 é maior"
* Caso o primeiro número seja igual ao segundo número, use o reject para mostrar no console "Números iguais"

2. Usando o código do exercício anterior como base adicione uma função que chama a promise do exercício anterior e use .then() e .catch() para exibir as mensagens no console.

3. Faça uma requisição na seguinte API https://fakerapi.it/api/v1/persons?_quantity=3&_locale=pt_BR e use o .then() e o .catch() para receber a resposta dessa API, em seguida exiba no console o nome completo, o email, o gênero traduzido para pt-BR e o país onde a segunda pessoa mora.
Exemplo:
Nome: Fulano Siclano
Email: fulano.siclano@exemplo.com
Gênero: Masculino/Feminino
País: Fulanolândia
**Obs:** Essa API está retornando 3 pessoas, abaixo segue um exemplo do retorno dela.

~~~JavaScript
{
    "status": "OK",
    "code": 200,
    "total": 3,
    "data": [
        {
            "firstname": "Demian",
            "lastname": "Quintana",
            "email": "leal.melissa@correia.com.br",
            "phone": "+4184194819428",
            "birthday": "1964-10-07",
            "gender": "male",
            "address": {
                "street": "Av. Martines, 00. Bc. 04 Ap. 98",
                "streetName": "Rua Rocha",
                "buildingNumber": "92",
                "city": "Fabiana d'Oeste",
                "zipcode": "56643-696",
                "country": "Tajiquistão",
                "county_code": "NU",
                "latitude": 21.723516,
                "longitude": -22.874076
            },
            "website": "http://barros.com.br",
            "image": "http://placeimg.com/640/480/people"
        },
        {
            "firstname": "Norma",
            "lastname": "Rivera",
            "email": "ddasilva@r7.com",
            "phone": "+4233533141243",
            "birthday": "2006-08-30",
            "gender": "female",
            "address": {
                "street": "Avenida Joaquin, 715. Bloco A",
                "streetName": "Av. Samuel Vega",
                "buildingNumber": "700",
                "city": "Porto David do Leste",
                "zipcode": "45847-536",
                "country": "Austrália",
                "county_code": "TZ",
                "latitude": -62.091153,
                "longitude": -51.451782
            },
            "website": "http://chaves.br",
            "image": "http://placeimg.com/640/480/people"
        },
        {
            "firstname": "Andres",
            "lastname": "Ramires",
            "email": "dominato.nadia@marin.org",
            "phone": "+4577549031222",
            "birthday": "2020-06-30",
            "gender": "male",
            "address": {
                "street": "Rua Mateus Leon, 028. Fundos",
                "streetName": "Av. Clara",
                "buildingNumber": "064",
                "city": "Isaac do Norte",
                "zipcode": "06662-417",
                "country": "Papua Nova Guiné",
                "county_code": "AR",
                "latitude": -73.445662,
                "longitude": 69.685887
            },
            "website": "http://rico.com.br",
            "image": "http://placeimg.com/640/480/people"
        }
    ]
}
~~~

4. Refatore o código do exercício 3 para um código que utilize async await, exiba no console o nome completo,  data de nascimento no padrão DD/MM/AAAA, o email, o gênero e o país de cada pessoa do array.
Exemplo:
Nome: Fulano Siclano
Data de nascimento: 25/08/1968
Email: fulano.siclano@exemplo.com
Gênero: Masculino/Feminino
País: Fulanolândia

## Bônus

Crie um arquivos HTML e CSS, e exiba em um navegador um card com as informações do exercício 4. Estilize como você quiser