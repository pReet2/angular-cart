import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',component: HomeComponent
  },
  {
    path:'home',component: HomeComponent
  },
{
  path: 'all-orders', component: AllOrdersComponent
},
{
  path: 'order-detail/:id', component: OrderSummaryComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
