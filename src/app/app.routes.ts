import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

export const routes: Routes = [
    {
        path:"",component:HomeComponent,title:"Home"
    },
    {
        path:"add-employee",component:AddEmployeeComponent
    },
    {
        path:"add-employee/:id",component:AddEmployeeComponent
    }
];
