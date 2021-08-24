const scope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }
  scope(true)
 
/* 
  const scope = (escopo) => `escopo === true`? `Não devo ser utilizada fora do meu escopo (if)` : `"Não devo ser utilizada fora meu escopo (else)`

  console.log(scope(true)) 
*/
