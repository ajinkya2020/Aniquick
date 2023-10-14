import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}

  public getFirstResponse(): Observable<Object> {
    return this.http.get<Object>('http://localhost:3000/app/firstCall');
  }

  public fetchAnimeByGenre(genre: string) {
    return this.http.post('http://localhost:3000/gpt/animeByGenre', genre);
  }
}