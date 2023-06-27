import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  allCountry:any[]=[];

  constructor(private service:HttpService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAllCountry();
  }

  

  getAllCountry(){
    this.service.getAllCountryRecord()
    .subscribe((response:any) => {
      this.allCountry=response;
      console.log(this.allCountry)
    })

    console.log("COuntry")
   
  }

  onSubmit(f:NgForm){
    
    let obj={
      emp_Name:f.value.name,
      mobileNo:f.value.phoneno,
      department:f.value.departmentit,
      status:f.value.status,
      country:{
        cid:f.value.country.cid,
        cname:f.value.country.cname
      },
      createdDate:Date.now(),
      createdBy:sessionStorage.getItem("username"),
      updatedDate:Date.now(),
      updated_By:sessionStorage.getItem("username")
    }

    this.service.addEmpRecord(obj)
    .subscribe((response:any)=>{
      console.log(response);
      this.router.navigate(['/home']);
    })

}
}
