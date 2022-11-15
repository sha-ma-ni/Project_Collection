import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { CenterComponent } from './center/center.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AllFiguresComponent } from './all-figures/all-figures.component';
import { AllSetsComponent } from './all-sets/all-sets.component';
import { CreatfigureComponent } from './creatfigure/creatfigure.component';
import { CreatsetComponent } from './creatset/creatset.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LeftComponent,
    RightComponent,
    CenterComponent,
    FooterComponent,
    LoginComponent,
    AllFiguresComponent,
    AllSetsComponent,
    CreatfigureComponent,
    CreatsetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
