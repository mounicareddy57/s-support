import { RouterModule, Routes } from '@angular/router';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ProductComponent} from "./components/product/product.component";

const appRoutes: Routes = [
  {path: 'product', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }

