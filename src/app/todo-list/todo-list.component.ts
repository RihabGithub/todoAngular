import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todo = "ToDo List";
  isPrimary = true;
  modalRef: BsModalRef;

  message: string;

  todos = [
    {
      name: "Angular",
      dateadd: new Date(),
      datedone: new Date()
    }, {
      name: "NodeJs",
      dateadd: new Date(),
      datedone: new Date()

    }, {
      name: "React",
      dateadd: new Date(),
      datedone: new Date()
    }, {
      name: "Symfony",
      dateadd: new Date(),
      datedone: new Date()
    }]

  dones = [{
    name: "Laravel",
    dateadd: new Date(),
    datedone: new Date(),
  }, {
    name: "PHP",
    dateadd: new Date(),
    datedone: new Date(),
  }]

  i: number;
  constructor(private toastr: ToastrService, private modalService: BsModalService) { }



  pushtab(tod) {
    let i = this.todos.indexOf(tod)
    this.todos.splice(i,1);
    this.dones.push(tod);

  }
  delettodo() {
    this.todos.splice(this.i, 1);
    this.modalRef.hide();
    this.showSuccess();

  }


  delet() {
    this.dones.splice(this.i, 1);
    this.modalRef.hide();
    this.showSuccess();

  }
  showSuccess() {
    this.toastr.success('Delete successfully');
  }
  openModal(template: TemplateRef<any>, i: number) {
    this.i = i;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  ngOnInit() {
  }

}
