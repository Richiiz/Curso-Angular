import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Richiiz';
  age = 19;
  img = 'https://yt3.ggpht.com/K9zEiBjtQowbvmr5yEb7VDU2FNDQd07Kc3X0wXxaigP9ibKDlMFHtIYOuA9zDRKgLy5bGWhJ=s900-c-k-c0x00ffffff-no-rj';
  btnDisable= true;

  person = {
    name: 'nicolas el vergas',
    age: 34,
    avatar: 'https://yt3.ggpht.com/K9zEiBjtQowbvmr5yEb7VDU2FNDQd07Kc3X0wXxaigP9ibKDlMFHtIYOuA9zDRKgLy5bGWhJ=s900-c-k-c0x00ffffff-no-rj'
  }
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
}
