import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Artist } from '../model/artist';
import { Observable, throwError } from 'rxjs';
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

  getArtists(): Observable<Artist[]> {
    const url = `${this.ROOT_URL}/artists/all`;
    return this.http.get<Artist[]>(url).pipe(
      tap((_) => {}),
      catchError(this.handleError<Artist[]>('getArtists', []))
    );
  }

  getArtist(id: string): Observable<Artist> {
    const url = `${this.ROOT_URL}/artist/${id}`;

    return this.http.get<Artist>(url).pipe(
      tap((_) => {}),
      catchError(this.handleError<Artist>(`getArtist id=${id}`))
    );
  }

  updateArtist(artist: Artist): Observable<any> {
    const url = `${this.ROOT_URL}/artist/${artist._id}`;

    return this.http.put(url, artist, this.httpOptions).pipe(
      tap((_) => this.clearMessageError()),
      catchError(this.handleError<any>('updateArtist'))
    );
  }

  addArtist(artist: Artist): Observable<Artist> {
    const url = `${this.ROOT_URL}/artist`;

    return this.http.post<Artist>(url, artist, this.httpOptions).pipe(
      tap((newArtist: Artist) =>
        this.log(`added artist w/ id=${newArtist._id}`)
      ),
      tap((_) => this.clearMessageError()),
      catchError(this.handleError<Artist>('addArtist'))
    );
  }

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
      let errorMessage = '';

      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else if (error.error.error.includes('MongoError: E11000')) {
        errorMessage = `The title already exists in the data base. Try another title`;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }

      // console.error(error);
      this.logError(error);

      return throwError(errorMessage);
    };
  }

  /** Log a ArtistService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ArtistService: ${message}`);
  }

  private analizeError(error: any) {
    if (error.error.includes('MongoError: E11000')) {
      this.messageService.addError(
        `The name already exists in the data base. Try another name`
      );
    }
  }
  private logError(error: any) {
    /*  this.messageService.addError(` ${error.message}`); */
    this.analizeError(error.error);
  }
  private clearMessageError() {
    this.messageService.clear();
  }
}
