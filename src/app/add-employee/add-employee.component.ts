import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  @Input() id !: string
  addEmployeeForm: FormGroup
  singleEmployeeeDetails:any=[]

  constructor(private fb:FormBuilder, private api:ServicesService, private route:ActivatedRoute){
    this.addEmployeeForm = this.fb.group({
      username:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email:["",[Validators.required,Validators.email]],
      job:[""]
    })
  }

  ngOnInit(){
    this.route.params.subscribe((res:any)=>{
      this.id = res.id
      console.log(this.id);
      if(this.id){
        this.api.getSingleEmployeeAPI(this.id).subscribe((res:any)=>{
          this.singleEmployeeeDetails = res
          console.log(this.singleEmployeeeDetails);
          
        })

      }
      
    })
  }

  
  addEmployee(){
    if(this.addEmployeeForm.valid){
      const username = this.addEmployeeForm.value.username
      const job = this.addEmployeeForm.value.job
      const email = this.addEmployeeForm.value.email
      console.log(job);
      
      //api call
      this.api.addEmployeeAPI({username,job,email}).subscribe((res:any)=>{
        alert("Employee Details Added Successfully!!!")
        this.addEmployeeForm.reset()
      })
    }else{
      alert("Invalid Form")
    }
  }

  

}
