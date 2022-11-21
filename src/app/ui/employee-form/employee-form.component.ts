import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    mail: new FormControl(null, [Validators.required]),
    // name: new FormControl (null,[Validators.required]),
    salary: new FormControl(null, [Validators.min(0), Validators.required]),
    age: new FormControl(null, [Validators.min(0), Validators.required])
  });

  constructor(private _employeeService: EmployeeService) {
  }

  onFormSubmitted(form:  CreateEmployeeModel) {
    this._employeeService.create({mail: form.mail, age: form.age, salary: form.salary} ).subscribe();
    this.onButtonClicked(form)
  }

  onButtonClicked(form: CreateEmployeeModel) {
    alert('User was successfully added to the database! ' + 'Mail: '+ form.mail + ', Age: '+ form.age + ', Salary: '+form.salary)
  }
}
