import { Component, OnInit } from '@angular/core';
import {AlbumService} from "./services/album.service"
import {Observable} from 'rxjs';
import {Album} from "./model/album"
import {MessageService} from "./services/message.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kenjo-challenge';
  albums$: Observable<Album[]>
constructor(private albumService: AlbumService, private messageService: MessageService){

}


  ngOnInit() {
    this.albums$ = this.albumService.loadCourses()
  }
  save(album:Album){
    this.albumService.saveAlbum(album).subscribe(() => console.log("album saved!")
    )
  }
}
