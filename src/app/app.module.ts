import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './components/test/test.component';

const appRoutes: Routes = [
  {path: '', component: UserComponent},
  {path: 'about', component: AboutComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  declarations: [
    // Components
    AppComponent,
    UserComponent,
    AboutComponent,
    TestComponent
  ],
  imports: [
    // Modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // Routes
  ],
  providers: [
    // Services
    DataService
  ],
  bootstrap: [
    // Main-App-Component
    AppComponent
  ]
})
export class AppModule { }
