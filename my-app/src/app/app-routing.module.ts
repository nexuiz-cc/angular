import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { MoviesComponent } from './movies/movies.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'content', component: ContentComponent },
      { path: 'movie', component: MoviesComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
