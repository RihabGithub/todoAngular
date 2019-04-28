import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-ajout-list',
  templateUrl: './ajout-list.component.html',
  styleUrls: ['./ajout-list.component.css']
})
export class AjoutListComponent implements OnInit {

  addform: FormGroup;
  constructor(fb: FormBuilder) { 

    this.addform = fb.group(
      {
        taskadd: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
      }

    );
  }
  get taskadd() {
    return this.addform.get('taskadd')
  }

  ngOnInit() {
  }

}
