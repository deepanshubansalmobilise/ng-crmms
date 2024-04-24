import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Home
import { HomePage } from './pages/home/home';

// Error
import { ErrorPage } from './pages/error/error';
// Calls
import { CallsComponent } from './pages/calls/calls.component';
// Login
import { LoginComponent } from './pages/login/login.component';
// Customer
import { CustomerComponent } from './pages/customer/customer.component';
// quick-links
import { QuickLinksComponent} from './pages/quick-links/quick-links.component';
//sales
import { SalesComponent} from './pages/sales/sales.component';
//Inventory
import { InventoryComponent} from './pages/inventory/inventory.component';
//Reports
import { ReportsComponent} from './pages/reports/reports.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomePage, data: { title: 'Dashboard'} },
  { path: 'calls', component: CallsComponent, data: { title: 'Calls'} },
  { path: 'login', component: LoginComponent, data: { title: 'login'} },
  { path: 'customer', component: CustomerComponent, data: { title: 'customer'} },
  { path: 'quick-links', component: QuickLinksComponent, data: { title: 'quick-links'} },
  { path: 'sales', component: SalesComponent, data: { title: 'sales'} },
  { path: 'inventory', component: InventoryComponent, data: { title: 'inventory'} },
  { path: 'reports', component: ReportsComponent, data: { title: 'reports'} },
  
	{ path: '**', component: ErrorPage, data: { title: '404 Error'} }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
