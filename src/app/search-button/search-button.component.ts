import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-search-button',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './search-button.component.html',
  styleUrl: './search-button.component.css'
})
export class SearchButtonComponent {

employeeDetails:any = []
@Output() employeeListUpdated = new EventEmitter<any[]>();

dummyAllEmployee:any = []


searchKey:any =""

constructor(private api : ServicesService){}

ngOnInit() {
 this.api.getAllEmployeeAPI().subscribe((res:any)=>{
  this.dummyAllEmployee = res
 })
}

// searchName() {
//   console.log(this.searchKey);
  
  
//   this.dummyAllEmployee = this.employeeDetails.filter((item:any) =>  item.username.toLowerCase().includes(this.searchKey.toLowerCase())
//   );
//   this.employeeListUpdated.emit(this.dummyAllEmployee);
//   console.log("dummyAllEmployee"+JSON.stringify(this.dummyAllEmployee, null, 2));
//   console.log("employeeDetails"+JSON.stringify(this.employeeDetails, null, 2));

//   this.cdr.detectChanges()
  
// }
searchName() {
  console.log(this.searchKey);

 
    // Filter the list based on the search key
    this.employeeDetails = this.dummyAllEmployee.filter((item: any) =>
      item.username.toLowerCase().includes(this.searchKey.toLowerCase())
    );
  

  // Emit the updated list (filtered or original)
  this.employeeListUpdated.emit(this.employeeDetails);

  console.log("dummyAllEmployee: " + JSON.stringify(this.dummyAllEmployee, null, 2));
  console.log("employeeDetails: " + JSON.stringify(this.employeeDetails, null, 2));

  // Optional: You can enable change detection if necessary
  // this.cdr.detectChanges();
}



}
