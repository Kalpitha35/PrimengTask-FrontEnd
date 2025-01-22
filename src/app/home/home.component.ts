import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ServicesService } from '../services.service';
import { AddEmployeeBtnComponent } from '../add-employee-btn/add-employee-btn.component';
import { SearchButtonComponent } from "../search-button/search-button.component";
import { SortButtonComponent } from '../sort-button/sort-button.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule, RouterLink, FormsModule, AddEmployeeBtnComponent, SearchButtonComponent,SortButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allEmployee:any=[]
  dummyAllEmployee:any= this.allEmployee
  statusArray:any=[]
  employeeDetails:any=this.allEmployee
  searchKey:string=""

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
  
 // Define the method to update the employee list
 updateEmployeeList(updatedEmployees: any[]) {
  this.allEmployee = updatedEmployees;  // Update the displayed list (filtered or original)
  console.log("Updated Employee List: ", this.dummyAllEmployee);
}


  deleteEmployee(id:any){
    console.log(`empId : ${id}`);
    
    this.api.deleteEmployeeAPI(id).subscribe((res:any)=>{
      alert("Employee deleted successfully !!! ")
      this.getAllEmployee()
    })
  }  
  // searchName() {
  //   console.log(this.searchKey);
    
    
  //   this.allEmployee = this.dummyAllEmployee.filter((item:any) =>  item.username.toLowerCase().includes(this.searchKey.toLowerCase())
  //   );
  //   console.log(this.dummyAllEmployee);
    
    
  // }

  // filterEmpByName(key:string,value:string){
  //   this.allEmployee = this.dummyAllEmployee.filter((item:any)=>item[key].includes(value))
  // }
  // sort(order: 'asc' | 'desc') {
  //   this.allEmployee.sort((a: any, b: any) => {
  //     if (order === 'asc') {
  //       return a.username > b.username ? 1 : -1; // Ascending order
  //     } else {
  //       return a.username < b.username ? 1 : -1; // Descending order
  //     }
  //   });
  // }
}



