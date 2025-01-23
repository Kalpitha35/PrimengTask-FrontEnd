import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup, FormsModule } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee-btn',
  standalone: true,
  imports: [Dialog,ButtonModule,InputTextModule,ReactiveFormsModule,FormsModule],
  templateUrl: './add-employee-btn.component.html',
  styleUrl: './add-employee-btn.component.css'
})
export class AddEmployeeBtnComponent {

@Output() employeeDetails = new EventEmitter<any>();

  addEmployeeForm: FormGroup
    singleEmployeeeDetails:any=[]
  
    constructor(private fb:FormBuilder, private api:ServicesService, private route:ActivatedRoute){
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

    addEmployee(){
      
     if(this.addEmployeeForm.valid) {
        this.employeeDetails.emit(this.addEmployeeForm.value)
      this.visible= false
    }else{
      alert("Invalid Form")
    }

    }
}
