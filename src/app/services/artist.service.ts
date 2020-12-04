import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Artist } from '../model/artist';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private ROOT_URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      accept: 'application/json',
    }),
  };

  /** Get artists from the server */
  getArtists(): Observable<Artist[]> {
    const url = `${this.ROOT_URL}/artists/all`;
    return this.http.get<Artist[]>(url).pipe(
      tap((_) => this.log('fetched artists')),
      catchError(this.handleError<Artist[]>('getArtists', []))
    );
  }

  /** Get artist by id */
  getArtist(id: string): Observable<Artist> {
    const url = `${this.ROOT_URL}/artist/${id}`;

    //TODO: SHOW 404 in case of error

    return this.http.get<Artist>(url).pipe(
      tap((_) => this.log(`fetched artist id=${id}`)),
      catchError(this.handleError<Artist>(`getArtist id=${id}`))
    );
  }

  /******* SAVE METHODS ********/
  /** PUT: update an artist on the server */
  updateArtist(artist: Artist): Observable<any> {
    const url = `${this.ROOT_URL}/artist/${artist._id}`;

    return this.http.put(url, artist, this.httpOptions).pipe(
      tap((_) => this.log(`updated artist id=${artist._id}`)),
      catchError(this.handleError<any>('updateArtist'))
    );
  }
  /** POST: add a new artist to the server */

  addArtist(artist: Artist): Observable<Artist> {
    const url = `${this.ROOT_URL}/artist`;
    console.log('from addArtist', artist);

    return this.http.post<Artist>(url, artist, this.httpOptions).pipe(
      tap((newArtist: Artist) =>
        this.log(`added artist w/ id=${newArtist._id}`)
      ),
      catchError(this.handleError<Artist>('addArtist'))
    );
  }

  //Delete artist from the server
  deleteArtist(id: string) {
    const url = `${this.ROOT_URL}/artist/${id}`;
    return this.http.delete<Artist>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted artist id=${id}`)),
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
      this.logError(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ArtistService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ArtistService: ${message}`);
  }

  private logError(error: any) {
    this.messageService.addError(` ${error.message}`);
    this.analizeError(error.error);
  }
  private analizeError(error: any) {
    if (error.error.includes('MongoError: E11000')) {
      this.messageService.addError(`The name already exists`);
    }
  }
}
