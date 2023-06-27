import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { Employee } from '../Model/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empArr:any[]=[]

  isSelect:boolean=false;

  modalRef!: BsModalRef; 
  
  config = {
    animated: true,
    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };

  empobj=<Employee>{};

  constructor(private service:HttpService,
    private modalservice:BsModalService) { }

  ngOnInit(): void {
    this.GetAllRecords();
  }

  GetAllRecords(){
      this.service.getAllRecord()
      .subscribe((response:any) => {
        this.empArr=response;
      })

  
  }

  onUpdate(popup: TemplateRef<any>){

    if(this.isRadioCheck()){
      //update a record
      this.modalRef = this.modalservice.show(        
        popup, this.config);
    }else{
      alert("Please Select a Record to Update ");
    }
  }

  onEdit(item:any){
     this.isSelect=true;
  }

  
  isRadioCheck(){
    if (this.isSelect) {
      return true;
    }else{
      return false;
    }    
  }

}
