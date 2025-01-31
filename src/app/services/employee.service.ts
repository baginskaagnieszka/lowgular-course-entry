import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { PersonModel } from '../model/person.model';
import { CreateEmployeeModel } from '../model/create-employee.model';
// import {EmployeeModel} from "../model/employee.model";
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>
    ('https://dummy.restapiexample.com/api/v1/employees',)
      .pipe(
        map((response:ApiResponse<EmployeeResponse[]>) => {
        return response.data.map((employeeResponse:EmployeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            personalNumber: employeeResponse.id,
            img: employeeResponse.profil_image,
            mail: ''
          }
        });
        })
      )
  }

  create(employee: CreateEmployeeModel): Observable<void> {
return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ => void 0));
  }
  delete(id: string): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete'+ id).pipe(map(_ => void 0));
  }
}
