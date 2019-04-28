import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionform: FormGroup;

  constructor(fb: FormBuilder) {
    this.inscriptionform = fb.group(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12)
        ]),
        confirmPassword:new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12)
        ]),
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
        ]),
        phone:new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]),
        email:new FormControl('', [
          Validators.required,
          Validators.email
        ]),
      }

    );
  }
  get firstName() {
    return this.inscriptionform.get('firstName')
  }
  get lastName() {
    return this.inscriptionform.get('lastName')
  }
  get phone() {
    return this.inscriptionform.get('phone')
  }
  get email() {
    return this.inscriptionform.get('email')
  }
  get password() {
    return this.inscriptionform.get('password')
  }
  get confirmPassword() {
    return this.inscriptionform.get('confirmPassword')
  }
  
  inscription(){
    console.log(this.inscriptionform.value);
  }
  ngOnInit() {
  }

}
