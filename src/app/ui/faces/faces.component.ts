import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';

import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'app-faces',
  templateUrl: './faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacesComponent {
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();
  constructor(private _employeeService: EmployeeService){
  }
}
