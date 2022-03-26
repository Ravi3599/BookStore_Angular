import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './MyComponents/user/user.component';
import { BookComponent } from './MyComponents/book/book.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './MyComponents/order/order.component';
import { CartComponent } from './MyComponents/cart/cart.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { ChangePasswordComponent } from './MyComponents/change-password/change-password.component';
import { DetailsComponent } from './MyComponents/details/details.component';
import { DeveloperdetailsComponent } from './MyComponents/developerdetails/developerdetails.component';
import { UserProfileComponent } from './MyComponents/user-profile/user-profile.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './MyComponents/customer/customer.component';
import { SummaryComponent } from './MyComponents/summary/summary.component';
import { WishlistComponent } from './MyComponents/wishlist/wishlist.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BookComponent,
    HeaderComponent,
    LoginComponent,
    OrderComponent,
    CartComponent,
    DashboardComponent,
    ChangePasswordComponent,
    DetailsComponent,
    DeveloperdetailsComponent,
    UserProfileComponent,
    CustomerComponent,
    SummaryComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
