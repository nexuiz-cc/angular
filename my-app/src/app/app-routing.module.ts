import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: 'content', component: ContentComponent }]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
