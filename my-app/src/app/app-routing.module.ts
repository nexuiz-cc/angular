import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { MoviesComponent } from './movies/movies.component';
import { DialogComponent } from './dialog/dialog.component';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'content', component: ContentComponent },
      { path: 'movie', component: MoviesComponent },
      { path: 'dialog', component: DialogComponent },
      { path: 'upload', component: UploadComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
