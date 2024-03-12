import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  operation : string = "";
  num1 : number = 0;
  num2 : number = 0;
  result :  number = 0;
  sinal : string = "";
  
  select(){
    if(this.operation == "soma"){
      this.sinal = "+"
    }
    if(this.operation == "subtração"){
      this.sinal = "-"
    }
    if(this.operation == "multiplicação"){
      this.sinal = "*"
    }
    if(this.operation == "divisão"){
      this.sinal = "/"
    }
    if(this.operation == "potência"){
      this.sinal = "**"
    }
  }
  
  onClickSum(){
    if(this.operation == "soma"){
      this.result = this.num1+this.num2;
    }
    if(this.operation == "subtração"){
      this.result = this.num1-this.num2;
    }
    if(this.operation == "multiplicação"){
      this.result = this.num1*this.num2;
    }
    if(this.operation == "divisão"){
      this.result = this.num1/this.num2;
    }
    if(this.operation == "potência"){
      this.result = this.num1**this.num2;
    }
  }
}

