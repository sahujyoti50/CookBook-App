// import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from '../employee.service';

// @Component({
//   selector: 'app-employee-details',
//   template:`<p>Employee names</p>
//              <li *ngFor="let employee of employees">{{employee.name}}</li>
//              <p>Employee id</p>
//              <li *ngFor="let employee of employees">{{employee.id}}</li>
//              <p>Employee age</p>
//              <li *ngFor="let employee of employees">{{employee.age}}</li>`
// })
// export class EmployeeDetailsComponent implements OnInit {

//   public employees=[];

//   constructor(private _employeeService:EmployeeService) {}

//   ngOnInit() {
//     this._employeeService.getEmployees()
//     .subscribe(data=>this.employees=data);
//   }

// }
