const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);
 //console.log(getUserName(1));
/* 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem. 
 */
test ('Promise test', () => {
  expect.assertions(1);
  return getUserName(1).then((user) => {
    expect(user).toBe('Mark');
  });
});

/* 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
Dica: Utilize o try/catch para o caso de erro.  */

test ('Promise test', async () => {
  expect.assertions(1);
  await getUserName(1).then((user) => {
    expect(user).toBe('Mark');
  });
});

test ('async await', async () => {
  expect.assertions(1);
  const getUser = await getUserName(1);
  expect(getUser).toBe('Mark');
});

test ('async await try catch', async () => {
  expect.assertions(1);
  try {
    const getUser = await getUserName(2);
    expect(getUser).toBe('Paul');
  } catch(error) {
    expect(error).toEqual(new Error(`User with X not found.`))
  }
});

test ('async await try catch error', async () => {
  try {
    await getUserName(3)
  } catch(error) {
    expect(error).toEqual(new Error(`User with 3 not found.`))
  }
});