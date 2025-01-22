import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sort-button',
  standalone: true,
  imports: [],
  templateUrl: './sort-button.component.html',
  styleUrl: './sort-button.component.css'
})
export class SortButtonComponent {

  @Input() employeeDetails:any[]= [];

  

  
  sort(order: 'asc' | 'desc') {
    console.log("Employee Details : "+JSON.stringify(this.employeeDetails, null, 2));
    this.employeeDetails.sort((a: any, b: any) => {
      if (order === 'asc') {
        return a.username > b.username ? 1 : -1; // Ascending order
      } else {
        return a.username < b.username ? 1 : -1; // Descending order
      }
    });
  }
}
