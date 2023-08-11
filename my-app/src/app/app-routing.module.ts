import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { DialogAnimationsExample } from './pages/dialog/dialog.component';
import { UploadComponent } from './pages/upload/upload.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'content', component: ContentComponent },
      { path: 'movie', component: MoviesComponent },
      { path: 'dialog', component: DialogAnimationsExample },
      { path: 'upload', component: UploadComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
