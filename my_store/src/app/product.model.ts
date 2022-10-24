// se le pone la palabra export para que sea visible para otros archivos, si no, otros archivos no podran
// jalar lo que hay dentro de este.
export interface Product {
  name: string;
  price: number;
  image: string;
  // category es opcional con el "?"
  category?: string
}
