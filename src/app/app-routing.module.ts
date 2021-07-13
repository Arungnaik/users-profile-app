import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'allusers', component:AllUsersComponent },
  { path: 'allusers/:uid', component:UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
