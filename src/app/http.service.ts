import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string='http://localhost:8080/';

  constructor(private http:HttpClient) { }

  login(obj:any){
    // console.log(obj.emailId)
    // console.log(obj.password)
    return (this.http.post(`${this.baseUrl}registration/user/`,obj));
  }

  getAllRecord(){
   return  (this.http.get(`${this.baseUrl}employee/get-AllEmployee`));
  }

  getRecordById(id:any){
   return (this.http.get(`${this.baseUrl}employee/get-employeeById/${id}`));
  }

  getAllCountryRecord(){
    return  (this.http.get(`${this.baseUrl}country/get-AllCountry`));
  }

  addEmpRecord(obj:any){

    return ( this.http.post(`${this.baseUrl}employee/add-employee`,obj,{
      responseType:'text'
    }));
  }
}
