import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  data: any = {};
  list: any = [];
  pageIndex = 1;
  constructor(private movie: MoviesService) {
    this.movie.getResponse(1).subscribe({
      next: (response: any) => {
        console.log(response);
        this.data = response;
        this.data.body.results[15].title= 'The Venture Bros.';
        console.log(this.data.body.results[15].title);
        this.list = this.data.body.results;
        for (let i = 0; i < this.data.body?.results.length; i++) {
          this.data.body.results[i].poster_path =
            'https://image.tmdb.org/t/p/w342' +
            this.data.body.results[i].poster_path;
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

  ngOnInit() {

  }

  first(){
    this.pageIndex=1;
    this.movie.getResponse(this.pageIndex).subscribe({
      next: (response: any) => {
        console.log(response);
        this.data = response;
        this.list = response.body?.results;
        for (let i = 0; i < this.data.body?.results.length; i++) {
          this.data.body.results[i].poster_path =
            'https://image.tmdb.org/t/p/w342' +
            this.data.body.results[i].poster_path;
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

  last(){
    this.pageIndex=500;
    this.movie.getResponse(this.pageIndex).subscribe({
      next: (response: any) => {
        console.log(response);
        this.data = response;
        this.list = response.body?.results;
        for (let i = 0; i < this.data.body?.results.length; i++) {
          this.data.body.results[i].poster_path =
            'https://image.tmdb.org/t/p/w342' +
            this.data.body.results[i].poster_path;
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
  
  next() {
    this.pageIndex++;
    this.movie.getResponse(this.pageIndex).subscribe({
      next: (response: any) => {
        console.log(response);
        this.data = response;
        this.list = response.body?.results;
        for (let i = 0; i < this.data.body?.results.length; i++) {
          this.data.body.results[i].poster_path =
            'https://image.tmdb.org/t/p/w342' +
            this.data.body.results[i].poster_path;
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

  previous(){
    this.pageIndex--;
    this.movie.getResponse(this.pageIndex).subscribe({
      next: (response: any) => {
        console.log(response);
        this.data = response;
        this.list = response.body?.results;
        for (let i = 0; i < this.data.body?.results.length; i++) {
          this.data.body.results[i].poster_path =
            'https://image.tmdb.org/t/p/w342' +
            this.data.body.results[i].poster_path;
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
