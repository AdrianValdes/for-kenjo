import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Album} from "../model/album";
import {Observable} from 'rxjs';
import {MessageService} from "./message.service"
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private ROOT_URL = "http://localhost:3000"
  constructor(private http: HttpClient, private messageService: MessageService) { }

  //Get the courses from the server
loadCourses():Observable<Album[]> {

  const params = new HttpParams().set("page", "1").set("pageSize", "10"); //GET /api/courses?page=1&pageSize=10

  this.messageService.add('AlbumService: fetched Albums');

 return this.http.get<Album[]>(`${this.ROOT_URL}/albums/all`)
  }


/******* SAVE METHODS ********/
  //Update a course on the server
saveAlbum(album:Album){
  const url = `${this.ROOT_URL}/album/${album._id}`
    // const headers = new HttpHeaders().set("X-Auth", "userId")
    //we need to pass a second argument to put
    return this.http.put(url, album)
  }



}
