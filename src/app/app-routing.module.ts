import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './MyComponents/book/book.component';
import { CartComponent } from './MyComponents/cart/cart.component';
import { ChangePasswordComponent } from './MyComponents/change-password/change-password.component';
import { CustomerComponent } from './MyComponents/customer/customer.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { DetailsComponent } from './MyComponents/details/details.component';
import { DeveloperdetailsComponent } from './MyComponents/developerdetails/developerdetails.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { OrderComponent } from './MyComponents/order/order.component';
import { SummaryComponent } from './MyComponents/summary/summary.component';
import { UserProfileComponent } from './MyComponents/user-profile/user-profile.component';
import { UserComponent } from './MyComponents/user/user.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"header",component:HeaderComponent},
  {path:"login",component:LoginComponent},
  {path:"user",component:UserComponent},
  {path:"book",component:BookComponent},
  {path:"cart",component:CartComponent},
  {path:"order",component:OrderComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"updateUser/:Id", component:UserComponent},
  {path:"updateBook/:Id", component:BookComponent},
  {path:"changePassword",component:ChangePasswordComponent},
  {path:"details",component:DetailsComponent, children:[
    {path:"developerdetails", component:DeveloperdetailsComponent}
  ]},
  {path:"update/:Id",component:UserComponent},
  {path:"dashboard/:token",component:DashboardComponent},
  {path:"customer/:token",component:CustomerComponent},
  {path:"cart/:token",component:CartComponent},
  {path:"profile/:email",component:UserProfileComponent},
  {path:"ordersummary",component:SummaryComponent},
  {path:"order/:Id",component:OrderComponent},
  {path:"**",component:LoginComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
