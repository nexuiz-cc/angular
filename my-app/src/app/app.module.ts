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
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { moviesReducer } from './store/reducer/movies.reducer';
import {UploadComponent} from './upload/upload.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';



const Route: Routes = [
  { path: '*', component: AppComponent },
  { path: 'count', component: CountComponent },
  { path: 'dialog', component: DialogComponent },
];

@NgModule({
  declarations: [
    ContentComponent,
    AppComponent,
    CountComponent,
    MoviesComponent,
    DialogComponent,
    UploadComponent,
  ],
  imports: [
    HttpClientModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
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
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
