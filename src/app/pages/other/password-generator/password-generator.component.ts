import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {

  calculeFormRandomPass!: UntypedFormGroup;
  generatedNumber!: number;
  error!: string;
  isCopie!: string;
  submitted: boolean = false;
  lowercaseValue: boolean = true;
  uppercaseValue: boolean = true;
  numbersValue: boolean = false;
  symbolsValue: boolean = false;
  duplicateValue: boolean = false;
  spacesValue: boolean = false;
  envirement: boolean = environment.production;
  schema: any;
  obj = {
    id: 1,
    answer: 12,
    step: 1,
    minValue: 1,
    maxValue: 40
  };
  passwordObj = {
    password: "",
  }
  value  = 0;

  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculeFormRandomPass = new UntypedFormGroup({
      password: new UntypedFormControl(""),
      lengthSlider: new UntypedFormControl("", [Validators.required]),
    });

  }


  ngOnInit(): void {
    this.titleService.setTitle("Free online Random Password Generator - Strong Passwords Generator");
    this.metaService.addTags([
      { name: 'keywords', content: "Random Password Generator, random password, strong passwords generator, password generator" },
      { name: 'description', content: "Free online Random Password Generator, this tool can be useful for creating strong passwords for online accounts" },
      { property: 'og:title', content: "Free online Random Password Generator - Strong Passwords Generator" },
      { property: 'og:description', content: "Free online Random Password Generator, this tool can be useful for creating strong passwords for online accounts" },
      { property: "og:url", content: "https://body-calculator.com/other/random-password-generator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/other/random-password-generator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "binary calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/other/random-password-generator/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2023-01-25",
      "publisher": {
        "@type": "Organization",
        "name": "body-calculator"
      },
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "Linux",
      "screenshot": "https://body-calculator.com/assets/images/logo/Screenshot-body-calculator.png",
      "softwareVersion": "1",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "ratingCount": "8864"
      },
      "offers": {
        "@type": "Offer",
        "price": "1.00",
        "priceCurrency": "USD"
      }
    };
  }
  get formRandomPassword() { return this.calculeFormRandomPass.controls; }


  public CalculateRandomPassword(): void {
    this.submitted = true;
    this.error = '';
    if (!this.lowercaseValue && !this.uppercaseValue && !this.numbersValue && !this.symbolsValue) {
      this.error = 'Please include at least one password settings.';
      this.passwordObj.password = "";
      // this.calculeFormRandomPass.reset()
      return
    }
    this.passwordObj.password = this.generatePassword(this.lowercaseValue, this.uppercaseValue, this.numbersValue, this.symbolsValue, this.calculeFormRandomPass.value.lengthSlider);
  }
  setDifecultePassword(){

      let arrayValues = [this.lowercaseValue , this.uppercaseValue , this.numbersValue , this.symbolsValue];
      const count = arrayValues.filter(Boolean).length;

      if (this.obj.answer > 11 && count == 4) {
        this.setValue(100);
        return
      }
      if (this.obj.answer > 11 && count == 3) {
        this.setValue(75);
        return
      }
      if (this.obj.answer > 11 && count == 2) {
        this.setValue(50);
        return
      }

      if (this.obj.answer > 8 && count > 2) {
        this.setValue(50);
        return
      }else{
        this.setValue(25);
        return
      }
  }

  getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  randomFunc = {
    lower: this.getRandomLower,
    upper: this.getRandomUpper,
    number: this.getRandomNumber,
    symbol: this.getRandomSymbol
  };
  generatePassword(lower: any, upper: any, number: any, symbol: any, length: any) {
    // 1. Init pw var
    // 2. filter out unchecked types
    // 3. Loop over length all generater function for each type
    // 4. Add final pw to the pw var and return

    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    // console.log('typesCount:', typesCount);

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      item => Object.values(item)[0]
    );

    // console.log('typesArr:', typesArr);

    if (typesCount === 0) {
      return '';
    }

    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];

        // console.log('funcName:', funcName);

        generatedPassword += this.randomFunc[funcName]();
      });
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
  }
  checkLowercase(event: any) {
    this.lowercaseValue = event.target.checked;
  }
  checkNumbers(event: any) {
    this.numbersValue = event.target.checked;
  }
  checkDuplicate(event: any) {
    this.duplicateValue = event.target.checked;
  }
  checkUppercase(event: any) {
    this.uppercaseValue = event.target.checked;
  }
  checkSymbols(event: any) {
    this.symbolsValue = event.target.checked;
  }
  checkSpaces(event: any) {
    this.spacesValue = event.target.checked;
  }
  copyInputMessage(inputElement: any) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    // setTimeout(() => {
    //   if (this.isCopie) {  this.isCopie = "Clipboard is copie"; }
    // }, 3000);
    this.isCopie = "Clipboard is copie"
  }
  regenerate() {
    // this.calculeFormRandomPass.reset();
    this.isCopie = "";
    // this.obj.answer = 12;
    this.passwordObj.password = this.generatePassword(this.lowercaseValue, this.uppercaseValue, this.numbersValue, this.symbolsValue, this.obj.answer);
    // this.passwordObj.password = this.generatePassword(true, true, true, true, this.obj.answer);
  }


  setValue(newValue: any) {
    this.value = Math.min(Math.max(newValue, 0), 100)
  }

  get status() {
    if (this.value <= 25) {
      return 'danger';
    } else if (this.value <= 50) {
      return 'warning';
    } else if (this.value <= 75) {
      return 'info';
    } else {
      return 'success';
    }
  }

  // valueChanged(event: any) {
  //   console.log(event);
  //   console.log(this.obj);
  // }
}
