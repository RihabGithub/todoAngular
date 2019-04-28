import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  connectionform: FormGroup;
  constructor(fb: FormBuilder) { 

    this.connectionform = fb.group(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12)
        ]),
      }

    );
  }
  get email() {
    return this.connectionform.get('email')
  }
  get password() {
    return this.connectionform.get('password')
  }
  ngOnInit() {
  }

}
