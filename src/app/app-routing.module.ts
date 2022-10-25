import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./login/login.component";
import {AllFiguresComponent} from "./all-figures/all-figures.component";
import {AllSetsComponent} from "./all-sets/all-sets.component";


const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "allfigures",
    component: AllFiguresComponent
  },
  {
    path: "allsets",
    component: AllSetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
