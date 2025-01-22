import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  server_Url = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  //addEmployee
  addEmployeeAPI(reqbody:any){
    return this.http.post(`${this.server_Url}/employeeDetails`,reqbody)
  }

   //getallamployee
   getAllEmployeeAPI(){
    return this.http.get(`${this.server_Url}/employeeDetails`)
  }

  //get single employee
  getSingleEmployeeAPI(id:any){
    return this.http.get(`${this.server_Url}/employeeDetails/${id}`)
  }

  //deleteemployee
  deleteEmployeeAPI(id:any){
    return this.http.delete(`${this.server_Url}/employeeDetails/${id}`)
  }

  // user/edit
editUserAPI(id:any,reqBody:any){
  return this.http.put(`${this.server_Url}/employeeDetails/${id}`,reqBody)

}
  
}
