import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Album } from '../model/album';
import { Observable, throwError } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AlbumService {
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

  getAlbums(): Observable<Album[]> {
    const url = `${this.ROOT_URL}/albums/all`;
    return this.http.get<Album[]>(url).pipe(
      tap((_) => this.log('fetched albums')),
      catchError(this.handleError<Album[]>('getAlbums', []))
    );
  }

  getAlbum(id: string): Observable<Album> {
    const url = `${this.ROOT_URL}/album/${id}`;

    return this.http.get<Album>(url).pipe(
      tap((_) => this.log(`fetched album id=${id}`)),
      catchError(this.handleError<Album>(`getAlbum id=${id}`))
    );
  }

  updateAlbum(album: Album): Observable<any> {
    const url = `${this.ROOT_URL}/album/${album._id}`;

    return this.http.put(url, album, this.httpOptions).pipe(
      tap((_) => this.log(`updated album id=${album._id}`)),
      tap((_) => this.clearMessageError()),
      catchError(this.handleError<any>('updateAlbum'))
    );
  }

  addAlbum(album: Album): Observable<Album> {
    const url = `${this.ROOT_URL}/album`;

    return this.http.post<Album>(url, album, this.httpOptions).pipe(
      tap((newAlbum: Album) => this.log(`added album w/ id=${newAlbum._id}`)),
      tap((_) => this.clearMessageError()),
      catchError(this.handleError<Album>('addAlbum'))
    );
  }

  deleteAlbum(id: string) {
    const url = `${this.ROOT_URL}/album/${id}`;
    return this.http.delete<Album>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted album id=${id}`)),

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

  /** Log a AlbumService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AlbumService: ${message}`);
  }
  private analizeError(error: any) {
    if (error.error.includes('MongoError: E11000')) {
      this.messageService.addError(
        `The title already exists in the data base. Try another title`
      );
    }
  }
  private logError(error: any) {
    this.analizeError(error.error);
  }
  private clearMessageError() {
    this.messageService.clear();
  }
}
