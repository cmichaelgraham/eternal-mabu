import {computedFrom,inject} from 'aurelia-framework';
import {Model} from 'views/model';

@inject(Model)

export class Welcome{
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'John';
  lastName = 'Doe';
  pizzaName = 'Pepperoni';
  model;

constructor(model){
  this.model=model;
}
  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')
  get fullName(){
    return `${this.firstName} ${this.lastName} ${this.model.search}`;
  }

  welcome(){
    alert(`Welcome, ${this.fullName}!`);
  }
  runme(){
    alert(`Welcome, You ran me!`);
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
