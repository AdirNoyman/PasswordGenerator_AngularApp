import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password = "";
  passwordLength = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  disableButton =  true;

  onInputLength(value: number) {

   
   this.passwordLength = value; 

  }

  onChangeUseLetters() {

    this.includeLetters = !this.includeLetters;

  }

    onChangeUseNumbers() {

    this.includeNumbers = !this.includeNumbers;

  }

    onChangeUseSymbols() {

    this.includeSymbols = !this.includeSymbols;

  }


  
  onButtonClick() {
   
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwyz";
    const symbols = "!@#$%ˆ&*()";

    let validChars = "";
    if (this.includeLetters) {validChars += letters};
    if (this.includeNumbers) {validChars += numbers};
    if (this.includeSymbols) {validChars += symbols};

    let generatedPassword = "";
  
    while(generatedPassword.length < this.passwordLength) {

      let randIndex = Math.floor(Math.random() * validChars.length);

      generatedPassword += validChars[randIndex];


    }

    this.password = generatedPassword;

    
  }


}
