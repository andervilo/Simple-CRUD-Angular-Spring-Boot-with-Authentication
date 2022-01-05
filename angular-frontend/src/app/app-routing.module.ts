import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { 
  AuthGuardService as AuthGuard 
} from './login/auth-guard.service';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard]},
  {path: 'create-employee', component: CreateEmployeeComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'employees', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent, canActivate: [AuthGuard]},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
