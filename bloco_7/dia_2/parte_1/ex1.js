const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const name = order.order.delivery.deliveryPerson;
    const consumer = order.name;
    const phone = order.phoneNumber;
    const adress = order.address.street;
    const adressNumber = order.address.number;
    const apartment = order.address.apartment;

    console.log(`Olá ${name}, entrega para: ${consumer}, Telefone: ${phone}, R. ${adress}, Nº: ${adressNumber}, AP: ${apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva'
    order.payment = 50
    const consumer = order.name;
    const pizza = Object.keys(order.order.pizza);
    const drink = order.order.drinks.coke.type;
    payment = order.payment;

    console.log(`Olá ${consumer}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drink} é R$${payment},00"`)
}

orderModifier(order);
console.log(Object.keys(order.order));

/* 
Agora você vai fazer alguns exercícios de fixação.

Complete a função customerInfo() para que seu retorno seja similar a:
"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

Note que o parâmetro da função já está sendo passado na chamada da função.

Complete a função orderModifier() para que seu retorno seja similar a:
"Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50, 00.
 */

// GABARITOS
/* const customerInfo = (order) => {
    const address = 'address';
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const customerName = order['name'];
    const customerPhone = order['phoneNumber'];
    const street = order[address].street;
    const number = order[address].number;
    const apartment = order[address].apartment;
  
    console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
  }
  
  customerInfo(order);


const orderModifier = (order) => {
    const newBuyer = order.name = 'Luiz Silva';
    const pizzas = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type;
    const newTotal = order.payment.total = '50';
  
    console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
  }
  
  orderModifier(order);
   */