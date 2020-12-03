import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Artist} from "../model/artist";
import {Observable} from 'rxjs';
import {MessageService} from "./message.service"
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArtistService {

private ROOT_URL = "http://localhost:3000"

  constructor(private http: HttpClient, private messageService: MessageService) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "accept": "application/json" })
  };

/** Get artists from the server */
getArtists():Observable<Artist[]>{
  console.log("getArtists");
  const url = `${this.ROOT_URL}/artists/all`
  return this.http.get<Artist[]>(url).pipe(
        tap(_ => this.log('fetched artists')),
        catchError(this.handleError<Artist[]>('getAlbums', []))
      );
}

/** Get artist by id */
getArtist(id: string): Observable<Artist> {
  const url = `${this.ROOT_URL}/artist/${id}`;

  //TODO: SHOW 404 in case of error

  return this.http.get<Artist>(url).pipe(
      tap(_ => this.log(`fetched artist id=${id}`)),
      catchError(this.handleError<Artist>(`getArtist id=${id}`))
    );
}

deleteArtist(id: string){
  const url = `${this.ROOT_URL}/artist/${id}`;
  return this.http.delete<Artist>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted artist id=${id}`)),
    catchError(this.handleError<Artist>('deleteArtist'))
  );
}

/**
   * Handling Http operations that could failed.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AlbumService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ArtistService: ${message}`);
  }
}
