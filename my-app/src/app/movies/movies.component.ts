import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  data:any={}
  list:any=[]
  constructor(private movie: MoviesService) {}

  ngOnInit() {
    this.movie.getResponse().subscribe({
      next: (response: any) => {
        console.log(response);
        this.data= response;
        this.list = response.body?.results;
       for(let i=0;i<this.data.body?.results.length;i++){
       this.data.body.results[i].poster_path = 'https://image.tmdb.org/t/p/w342'+this.data.body.results[i].poster_path
  }
      },
      error: (e) => {
        switch (e.status) {
          default:
            console.log('error: ', e);
            break;
        }
      },
      complete: () => console.info('complete'),
    });
  }

}
