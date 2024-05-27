const obj1 = {
  nome: 'junior',
  idade: 65,
};
const obj2 = {
  telefone: '4564656456',
  endereco: 'rua xy, numero 500',
};

function combinarObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(combinarObjetos(obj1, obj2));
