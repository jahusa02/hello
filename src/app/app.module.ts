import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';

const appRoutes: Routes = [
  {path: '', component: TestComponent}
];

@NgModule({
  declarations: [
    // Components
    AppComponent,
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
  ],
  bootstrap: [
    // Main-App-Component
    AppComponent
  ]
})
export class AppModule { }
