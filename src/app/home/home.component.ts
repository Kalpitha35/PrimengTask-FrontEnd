import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ServicesService } from '../services.service';
import { AddEmployeeBtnComponent } from '../add-employee-btn/add-employee-btn.component';
import { SearchButtonComponent } from "../search-button/search-button.component";
import { SortButtonComponent } from '../sort-button/sort-button.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule, FormsModule, AddEmployeeBtnComponent,EditEmployeeComponent, SearchButtonComponent,SortButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allEmployee:any=[]
  dummyAllEmployee:any= this.allEmployee
  statusArray:any=[]
  employeeDetails:any=this.allEmployee
  searchKey:string=""
  empDetailsFromAddBtn:any = {}
  employeeUpdatesFromEdit:any = {}

  dummyUpdate:any=[]
  constructor(private api:ServicesService,private fb:FormBuilder){}

  ngOnInit(){
    this.getAllEmployee()
  }
  getAllEmployee(){
    this.api.getAllEmployeeAPI().subscribe((res:any)=>{
      this.allEmployee = res
      this.dummyAllEmployee=this.allEmployee
      console.log(this.allEmployee);
      this.allEmployee.forEach((emp:any)=>{
        !this.statusArray.includes(emp.status) && this.statusArray.push(emp.status)
      })
    })
  }

  employeeAdded(employeeDetailsFromChild:any){
    this.empDetailsFromAddBtn = employeeDetailsFromChild
    console.log("Data From employeeDetailsFromChild : "+JSON.stringify(employeeDetailsFromChild));
   
      
      //api call  
      this.api.addEmployeeAPI(this.empDetailsFromAddBtn).subscribe((res:any)=>{
        alert("Employee Details Added Successfully!!!")
        this.getAllEmployee()
      })
  }
  
 updateEmployeeList(updatedEmployees: any[]) {
  this.allEmployee = updatedEmployees;  
  console.log("Updated Employee List: ", this.dummyAllEmployee);
}


  deleteEmployee(id:any){
    console.log(`empId : ${id}`);
    
    this.api.deleteEmployeeAPI(id).subscribe((res:any)=>{
      alert("Employee deleted successfully !!! ")
      this.getAllEmployee()
    })
  }  

  updatedDetails(data:any){
    this.employeeUpdatesFromEdit = data
      this.api.editUserAPI(this.employeeUpdatesFromEdit.id,this.employeeUpdatesFromEdit).subscribe((res:any)=>{
        alert("Employee Details Updated Successfully!!!")
      })
    }
  }




