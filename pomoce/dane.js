/* eslint-disable consistent-return */
//  # praca z tekstem
const text = 'konsatantynopolita jest fajna';
// ? zmiana wielkosci czcionki
const upper = str => str.toUpperCase();
console.log(upper(text));

// # praca z tablicami
// ? pobieranie wszystkich obiektów z tablicy
const getAll = () => {
  return obj;
};

// ? pobranie jednej obiektu z tablicy
const getOne2 = id => {
  return (obj = obj.find(oneObj => oneObj.id === id));
};

// ? dodawanie do tablicy -> obiektu
const create = obj => {
    const id = uuid();
    newObj.push({ id, ...obj });
    return id;
};

// ? aktualizacja wybranego obiektu w tablicy
const update = (id, newObj) => {
  obj = obj.map(oneObj =>
    oneObj.id === id ? { ...oneObj, ...newObj } : oneObj
  );
  return obj
};

// ? usówanie wybranego obiektu z tablicy
 const delete=(id)=> {
   obj = obj.filter(oneObj => oneObj.id !== id);
   return obj
  }

// # praca z obiektami

// ? Wyszukiwanie po kluczu i zwracanie jego wartości
const obj1 = {
  light: 5,
  dark: 7,
};

function foundValueInObject(obj, key) {
  const selected = key;
  const entries = Object.entries(obj);
  const found = entries.find(el => el[0] === selected);
  if (!found) {
    throw new Error(`Cannot fond value of object ${selected}`);
  }
  const [, value] = found;
  return value;
}

console.log(foundValueInObject(obj1, 'dark')); // 7
