import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../Model/employee';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  @Input() parentdata:Employee=<Employee>{};

  constructor() { }

  ngOnInit(): void {
    console.log(this.parentdata)
  }

}
