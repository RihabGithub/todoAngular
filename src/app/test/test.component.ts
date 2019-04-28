import { Component, OnInit,TemplateRef} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  modalRef: BsModalRef;

message: string;
courses = [{ 
  title:"Angular",
  students: 5897,
  rating:5.698,
  price:1.986,
  realaseDate: new Date()
},{ 
  title:"Laravel",
  students: 6589,
  rating:6.698,
  price:11.986,
  realaseDate: new Date()
},{ 
  title:"NodeJs",
  students: 9685,
  rating:15.698,
  price:10.986,
  realaseDate: new Date()
},{ 
  title:"React",
  students: 15897,
  rating:56.698,
  price:11.986,
  realaseDate: new Date()
}]
i:number;
  constructor(private toastr: ToastrService,private modalService: BsModalService) { }
  
  
  delet(){
    this.courses.splice(this.i,1);
    this.modalRef.hide();
  
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  openModal(template: TemplateRef<any>, i:number) {
    this.i= i;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
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
