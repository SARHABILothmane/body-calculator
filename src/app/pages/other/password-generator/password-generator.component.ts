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
  uppercaseValue: boolean = false;
  numbersValue: boolean = false;
  symbolsValue: boolean = false;
  duplicateValue: boolean = false;
  spacesValue: boolean = false;
  envirement: boolean = environment.production;
  schema: any;
  obj = {
    id: 1,
    answer: 10,
    step: 1,
    minValue: 1,
    maxValue: 40
  };
  passwordObj = {
    password: "",
  }
  value = 50;

  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculeFormRandomPass = new UntypedFormGroup({
      password: new UntypedFormControl(""),
      lengthSlider: new UntypedFormControl("", [Validators.required]),
    });

  }


  ngOnInit(): void {
    this.titleService.setTitle("Free online Random Number Generator RNG");
    this.metaService.addTags([
      { name: 'keywords', content: "random number generator, pick a number, rng, random number, random generator, random number picker, number randomizer, random numbers" },
      { name: 'description', content: "Free online Random Number Generator RNG (pick a number, random number picker, number randomizer, random numbers)" },
      { property: 'og:title', content: "Free online Random Number Generator RNG" },
      { property: 'og:description', content: "Free online Random Number Generator RNG (pick a number, random number picker, number randomizer, random numbers)" },
      { property: "og:url", content: "https://body-calculator.com/math/random-number-generator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/math/random-number-generator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Random Number Generator RNG",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/math/random-number-generator/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2022-01-10",
      "publisher": {
        "@type": "Organization",
        "name": "body-calculator"
      },
      "applicationCategory": "EducationalApplication",
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


  public CalculateRandomPassword(e: HTMLElement): void {
    this.submitted = true;
    this.error = '';
    if (!this.lowercaseValue && !this.uppercaseValue && !this.numbersValue && !this.symbolsValue) {
      this.error = 'Please include at least one characters set for the password to be based on.';
      this.passwordObj.password = "";
      // this.calculeFormRandomPass.reset()
      return
    }
    this.passwordObj.password = this.generatePassword(this.lowercaseValue, this.uppercaseValue, this.numbersValue, this.symbolsValue, this.calculeFormRandomPass.value.lengthSlider);
    // e.scrollIntoView({ behavior: "smooth" });

    // if (this.obj.answer > 30) {
    //   this.setValue(100);
    //   return
    // }
    // if (this.obj.answer > 20) {
    //   this.setValue(75);
    //   return
    // }
    // if (this.obj.answer > 9) {
    //   this.setValue(50);
    //   return
    // }
    // if (this.obj.answer > 5) {
    //   this.setValue(25);
    //   return
    // }
    if (this.obj.answer > 30 && this.lowercaseValue && this.uppercaseValue && this.numbersValue && this.symbolsValue) {
      this.setValue(100);
      return
    }
    if (this.obj.answer > 20 && this.lowercaseValue && this.uppercaseValue && this.numbersValue || this.symbolsValue) {
      this.setValue(75);
      return
    }
    if (this.obj.answer > 9 && this.lowercaseValue && this.uppercaseValue || this.numbersValue || this.symbolsValue) {
      this.setValue(50);
      return
    }
    if (this.obj.answer <= 5) {
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
    this.calculeFormRandomPass.reset();
    this.isCopie = "";
    this.obj.answer = 12;
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

  valueChanged(event: any) {
    console.log(event);
    console.log(this.obj);
  }
}
