import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup, FormsModule } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [Dialog,ButtonModule,InputTextModule,ReactiveFormsModule,FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {

  @Input() employeeDetailsFromHome:any ={}
  @Output() employeeUpdatesFromEdit = new EventEmitter<any>();
  

  addEmployeeForm: FormGroup
  singleEmployeeeDetails:any=[]

  constructor(private fb:FormBuilder, private route:ActivatedRoute){
        this.addEmployeeForm = this.fb.group({
          username:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
          email:["",[Validators.required,Validators.email]],
          job:[""]
        })
      }
    visible: boolean = false;
  
      showDialog() {
          this.visible = true;
      }

      saveUpdates(){
        if(this.addEmployeeForm.valid) {
          this.employeeUpdatesFromEdit.emit(this.employeeDetailsFromHome)
        this.visible= false
      }else{
        alert("Invalid Form")
      }
  
      }

      
}
