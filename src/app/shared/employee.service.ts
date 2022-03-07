import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  form: FormGroup= new FormGroup({
    //$ represents a primary key. 
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email : new FormControl('', Validators.email),
    mobile : new FormControl('', [Validators.required, Validators.minLength(10)]),
    city : new FormControl(''),
    gender : new FormControl('1'),
    department : new FormControl(''),
    hireDate : new FormControl(''),
    isPermanent : new FormControl(false),

  })
  initializeFormGroup(){
    this.form.setValue(
      {
        $key:'',
        fullName:'',
        email:'',
        mobile:'',
        city:'',
        gender:'1',
        department:'',
        isParmanent:'false'

      }
    )
  }
}
