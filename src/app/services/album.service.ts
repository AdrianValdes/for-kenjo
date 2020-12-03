import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Album} from "../model/album";
import {Observable} from 'rxjs';
import {MessageService} from "./message.service"
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private ROOT_URL = "http://localhost:3000"

  constructor(private http: HttpClient, private messageService: MessageService) { }

httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "accept": "application/json" })
  };

  /** Get albums from the server */
getAlbums():Observable<Album[]> {

 return this.http.get<Album[]>(`${this.ROOT_URL}/albums/all`).pipe(
        tap(_ => this.log('fetched albums')),
        catchError(this.handleError<Album[]>('getAlbums', []))
      );
}

/** Get album by id */
getAlbum(id: string): Observable<Album> {
  const url = `${this.ROOT_URL}/album/${id}`;

  //TODO: SHOW 404 in case of error

  return this.http.get<Album>(url).pipe(
      tap(_ => this.log(`fetched album id=${id}`)),
      catchError(this.handleError<Album>(`getAlbum id=${id}`))
    );
}

   /******* SAVE METHODS ********/
/** PUT: update the album on the server */
updateAlbum(album: Album): Observable<any> {
  const url = `${this.ROOT_URL}/album/${album._id}`
  console.log("HHEE", album);
  console.log(url);

  return this.http.put(url, album, this.httpOptions).pipe(
    tap(_ => this.log(`updated album id=${album._id}`)),
    catchError(this.handleError<any>('updateAlbum'))
  );
}
/** POST: add a new album to the server */


addAlbum(album: Album): Observable<Album> {
  const url = `${this.ROOT_URL}/album`
  return this.http.post<Album>(url, album, this.httpOptions).pipe(
    tap((newAlbum: Album) => this.log(`added album w/ id=${newAlbum._id}`)),
    catchError(this.handleError<Album>('addAlbum'))
  );
}
deleteAlbum(id: string){
  const url = `${this.ROOT_URL}/album/${id}`;
  return this.http.delete<Album>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted album id=${id}`)),
    catchError(this.handleError<Album>('deleteAlbum'))
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
    this.messageService.add(`AlbumService: ${message}`);
  }

}
