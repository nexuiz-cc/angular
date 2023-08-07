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
import { MoviesService } from './movies/movies.service';
import { counterReducer } from './store/reducer/counter.reducer';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EffectsModule } from '@ngrx/effects';
import { moviesReducer } from './store/reducer/movies.reducer';

const Route: Routes = [
  { path: '*', component: AppComponent },
  { path: 'count', component: CountComponent }
];

@NgModule({
  declarations: [
    ContentComponent,
    AppComponent,
    CountComponent,
    MoviesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer,movies: moviesReducer}),
    RouterModule.forRoot(Route),
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatPaginatorModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
