import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'client';
  public animeByGenreResponse: any;
  
  constructor(public appSerive: AppService) {}

  ngOnInit(): void {
    this.appSerive.getFirstResponse().subscribe((res: Object) => {
      console.log(res);
    })
  }

  public getAnimeByGenre(genre: string): void {
    console.log(genre);
    this.appSerive.fetchAnimeByGenre(genre).subscribe((res) => {
      console.log("response received on clint side: " + res);
      this.animeByGenreResponse = res;
    })
  }
}
