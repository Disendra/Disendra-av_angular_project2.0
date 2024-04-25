import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './home-page/header/header.component';
import { AboutComponent } from './home-page/about/about.component';
import { CountsComponent } from './home-page/counts/counts.component';
import { ValuesComponent } from './home-page/values/values.component';
import { ServicesComponent } from './services/services.component';
import { TESTIMONIALSComponent } from './home-page/testimonials/testimonials.component';
import { ClientsComponent } from './home-page/clients/clients.component';
import { ContactComponent } from './home-page/contact/contact.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { HeroComponent } from './home-page/hero/hero.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AvEnginnerComponent } from './av-enginner/av-enginner.component';
import { AvHeaderComponent } from './av-enginner/av-header/av-header.component';
import { AvSimulatorComponent } from './av-enginner/av-simulator/av-simulator.component';
import { AvAboutComponent } from './av-enginner/av-about/av-about.component';
import { AvCalculatorComponent } from './av-enginner/av-calculator/av-calculator.component';
import { AvMyprofileComponent } from './av-enginner/av-myprofile/av-myprofile.component';
import { BtuCalculatorComponent } from './av-enginner/btu-calculator/btu-calculator.component';
import { AvDirectoryComponent } from './av-enginner/av-directory/av-directory.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FeedComponent } from './feed/feed.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EkartComponent } from './ekart/ekart.component';
import { ReportsComponent } from './av-enginner/reports/reports.component';
import { BussinessCardComponent } from './bussiness-card/bussiness-card.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    AboutComponent,
    CountsComponent,
    ValuesComponent,
    ServicesComponent,
    HeroComponent,
    TESTIMONIALSComponent,
    ClientsComponent,
    ContactComponent,
    FooterComponent,
    LoginPageComponent,
    HomePageComponent,
    AvEnginnerComponent,
    AvHeaderComponent,
    AvAboutComponent,
    AvSimulatorComponent,
    AvMyprofileComponent,
    AvCalculatorComponent,
    BtuCalculatorComponent,
    AvDirectoryComponent,
    FeedbackPageComponent,
    SpinnerComponent,
    FeedComponent,
    AdminPageComponent,
    EkartComponent,
    ReportsComponent,
    BussinessCardComponent,
    CommunityPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    RecaptchaFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatButtonModule,
    RecaptchaModule,
    MatCheckboxModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSelectModule,
    MatProgressBarModule,
    MatNativeDateModule,
    QRCodeModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
