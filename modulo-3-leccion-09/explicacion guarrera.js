
/* const lista = [1, 2, 3, 4, 5, 6];

const nuevaLista = [30, 304, ...lista, 10, 11];

nuevaLista;

const person = {
  name: 'Marie',
  lastName: 'Smith',
  age: 39,
  languages: ['English', 'French']
};

const nuevaPerson = {
  car: "Renault",
  ...person,
  pet: "Wiskas"
}
nuevaPerson

const { name, lastName, languages } = person; */

/* const lista = [1, 2, 3, 4, 5, 6];

const [a, b, c, ...resto] = lista;

a
b
c
resto

const [, , , x, y, z] = lista;
x
y
z


function useState(valor) {
  return [valor, () => { }];
}

const [name, setName] = useState("Dayana");

name
setName */
 
/* 
let a = 1;
let b = 2;

[a, b] = [b, a];
a
b */

//const name = "Estíbaliz";


const person = {
  name: "Marie",
  lastName: "Smith",
  age: 39,
  languages: ["English", "French"],
};

const { name, lastName, age, languages } = person;

name
lastName
age
languages

//const name = "";

person


/* 
const { name } = person;   // const name = person.name
const { name:tururu } = person;   // const tururu = person.name

name
tururu */

const leccion = "Buenas prac";
const modulo = "React";
const dia = "16nov"

const objCurso = {
  leccion,
  modulo,
  dia
}

objCurso