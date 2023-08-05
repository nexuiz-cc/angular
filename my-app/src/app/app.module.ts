import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { CountComponent } from './count/count.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducer/counter.reducer';
import { RouterModule, Routes } from '@angular/router';

const Route: Routes = [
  { path: '*', component: AppComponent },
  { path: 'count', component: CountComponent }
];

@NgModule({
  declarations: [
    ContentComponent,
    AppComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer }),
    RouterModule.forRoot(Route),
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
