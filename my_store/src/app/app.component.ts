import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
// clase puesta en la class binding
widthImg = 10

  name = 'Richiiz';
  age = 19;
  img = 'https://yt3.ggpht.com/K9zEiBjtQowbvmr5yEb7VDU2FNDQd07Kc3X0wXxaigP9ibKDlMFHtIYOuA9zDRKgLy5bGWhJ=s900-c-k-c0x00ffffff-no-rj';
  btnDisable= true;

  person = {
    name: 'nicolas el vergas',
    age: 34,
    avatar: 'https://yt3.ggpht.com/K9zEiBjtQowbvmr5yEb7VDU2FNDQd07Kc3X0wXxaigP9ibKDlMFHtIYOuA9zDRKgLy5bGWhJ=s900-c-k-c0x00ffffff-no-rj'
  }

  names: string[] = ['nico', 'juli', 'elfa'];
  NewName  = '';

  box = {
    width: 10,
    height: 100,
    background: 'red'
  };


  // como buena practica se recomienda tipar los arrays para evitar errores
  // tipar es indicarle que tipo de elemento va a recibir un objeto, en este caso el array
  // en este caso se tipa con "product[]"
  // mirar archivo product.model.ts que esta en la carpeta app
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/si.jpg',
      // aqui category es el unico elemento de los demas, se le pone a "category" un "?" para hacerlo opcional
      // mirar archivo product.model.ts que esta en la carpeta app
      category: 'SI',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bici.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/libro.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/casa.png'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/gafas.jpg'
    }
  ]


  //ejemplo de *ngFor hecho por mi
  // NewLista: string[] = ['papel', 'pasra', 'papitas'];
  // lista = '';

  toggleButton(){
    this.btnDisable = !this.btnDisable;
  }
  Age(){
    this.person.age += 1;
  }
  OnScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  AddName(){
    this.names.push(this.NewName);
    // imput limpiado despues de agregar nuevo nombre
    this.NewName = '';
  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }
  //ejemplos del ngFor hecho por mi
  // anadir(){
  //   this.NewLista.push(this.lista);
  //   this.NewLista
  // }
  // borrar(index: number){
  //   this.NewLista.splice(index, 1)
  // }
}
