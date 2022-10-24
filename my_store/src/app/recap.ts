const username: string | number = 'richi';
const sum = (a: number, b: number) => {
  return a + b;
}

sum(1,5);

class Persona {

  //decirle al codigo que tipo de variable debe ser, ayuda a eliminar el 70% de los bugs de codigo.
  // age: number;
  // lastname: string;

// al poner public dentro del constructor se declaran las variables mientras las haces publcas para que todo el codigo pueda tomarlas. De esta
// manera ya no es necesario declararlas en el array de persona
  constructor(public age: number, public lastname: string){
    // this.age = age;
    // this.lastname = lastname;
  }
}


const nico = new Persona(16, 'rodriguez');

nico.age;
