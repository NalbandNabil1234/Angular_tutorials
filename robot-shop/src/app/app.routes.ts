import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const routes: Routes = [
      {path: 'home', component: HomeComponent},
      {path: 'catalog', component: CatalogComponent},

      // first way to send params this is called path parameters using filter
      // {path: 'catalog/:filter', component: CatalogComponent},

      // another way is using queryParams in the template file where we have used routerLink 
      {path: 'catalog', component: CatalogComponent},
      
      {path: 'cart', component: CartComponent},
      {path: 'sign-in', component: SignInComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
];
