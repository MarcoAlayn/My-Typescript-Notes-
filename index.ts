// ** Declaracion por interface **
interface User {
    name :  string
    edad : number
}

const user : User = {
    name: "marco",
    edad: 30
}

// ** Declaracion por tipos **
// un tipo es una forma de especificar cómo debe ser un valor.
type unType = "puede ser uno"

// ** UNIONS **
type miPrimerTipo = "puedes ser un string" | "o varios" | "tambien pueden ser numeros ↓";
type misNumeros = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 ;
type misTiposBooleanos = true | false;

type mixDeTipos = "puede ser una combinacion de tipos" | 1; 

// ** Genericos **
// generics provee tipos a las variables
// un array con genericos puede describir los valores que el array contiene
// un Array sin genericos puede contener cualquier cosas
type miArrayDeCadenas = Array<string>; // creo que es igual a string[]
type miArrayDeNumeros = Array<number>; // creo que es igual a number[]
type arrayConObjetoNombre = Array<{name:string}>;


// modo de uso de Generics*
// definimos una interface para calcular los puntos al finalizar una partida de BF4
// el generics o tipo de dato, aqui se usa por asi decirlo como una especie de props(puedes poner el nombre que quieras Type o X) que le pasaremos cuando usemos al declarar una variable
interface PuntosPartidaBF4<Type> {
    suma : (obj: Type) => void;
    resultado: ()=>Type;
}

// definimos una variable haciendo uso de la interface PuntosPartidaBF4 y pasandole el type de dato que utilizara dentro de su logica
declare const puntosPartidaBF4 : PuntosPartidaBF4<number>;

const object = puntosPartidaBF4.resultado();

// aqui el tipo que pasemos al invocar el metodo herado (Kekkei Genkai) tiene que de tipo numero ya que asi lo definimos previemante
// al declarar la constante que hace uso de la interface, de lo contrario marcar un error
puntosPartidaBF4.suma(2)


//** Sistema de tipo estructural **

// El sistema de tipos estructurales en TypeScript es un sistema de tipos basado en la estructura de los objetos. 
// En este sistema, los tipos se determinan basándose en la estructura de los objetos, en lugar de basarse en la herencia. 
// Esto significa que dos objetos son considerados del mismo tipo si tienen la misma estructura. 
// Por ejemplo, dos objetos con la misma cantidad de propiedades y los mismos nombres de propiedades
//  y tipos de datos tendrían el mismo tipo. Aquí hay un ejemplo de cómo funciona el sistema de tipos estructurales en TypeScript:

interface Point {
    x: number;
    y: number;
  }
  
  let p1: Point = { x: 0, y: 10 };
  let p2: Point = { x: 0, y: 10 };
  p1 = p2; // OK
  


// Una clase en JavaScript es una plantilla para crear objetos y contiene propiedades y métodos. Una clase comienza con la palabra clave "class" seguida del nombre de la clase. Las partes principales de una clase en JavaScript son 
// los constructores, 
// los atributos, 
// los métodos 
// y las propiedades. 
// El constructor define los atributos iniciales del objeto, mientras que los métodos son funciones que se usan para realizar tareas específicas. Las propiedades son variables asociadas con un objeto que pueden ser leídas o modificadas.
class Sumar{
    num1:number;
    num2:number;

    constructor(num1:number,num2:number){
        this.num1=num1;
        this.num2=num2;
    }

    sumar(){
        return this.num1+this.num2;
    }
}

let suma = new Sumar(1,3);
console.log("suma")


function SumarFunc(a:number,b:number){
return a + b
}



