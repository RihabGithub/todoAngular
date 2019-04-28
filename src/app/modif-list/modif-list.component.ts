import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-modif-list',
  templateUrl: './modif-list.component.html',
  styleUrls: ['./modif-list.component.css']
})
export class ModifListComponent implements OnInit {
  updateform: FormGroup;
  constructor(fb: FormBuilder) { 

    this.updateform = fb.group(
      {
        task: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
      }

    );
  }
  get task() {
    return this.updateform.get('task')
  }
  ngOnInit() {
  }

}
