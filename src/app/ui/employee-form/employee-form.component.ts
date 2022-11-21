import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    mail: new FormControl (null,[Validators.required]),
    // name: new FormControl (null,[Validators.required]),
    salary: new FormControl (null, [Validators.min(0), Validators.required]),
    age: new FormControl (null,[Validators.min(0), Validators.required])
  });

  // onButtonClicked() {
  //   alert('User was successfully added to the database');
  // }
  onButtonClicked(form: {mail:string, age:string, salary:string}) {
    alert('User was successfully added to the database! ' + 'Name: '+ form.mail + ', Age: '+ form.age + ', Salary: '+form.salary)
  }
}
