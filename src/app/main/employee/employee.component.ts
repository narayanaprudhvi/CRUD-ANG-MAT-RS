import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  department=['ANGULAR', 'REACT', 'VUE' , 'HTML', 'CSS'];

  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.empService.form.reset();
    this.empService.initializeFormGroup();

  }
}
