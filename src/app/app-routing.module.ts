import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./login/login.component";
import {AllFiguresComponent} from "./all-figures/all-figures.component";
import {AllSetsComponent} from "./all-sets/all-sets.component";
import {CreatfigureComponent} from "./creatfigure/creatfigure.component";
import {CreatsetComponent} from "./creatset/creatset.component";


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
  },
  {
    path: "creatfigure",
    component: CreatfigureComponent
  },
  {
    path: "creatset",
    component: CreatsetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
