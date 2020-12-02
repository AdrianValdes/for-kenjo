import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import {Album} from "../model/album"
import {MessageService} from "../services/message.service"
import {Observable} from 'rxjs';
import {AlbumService} from "../services/album.service"
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  selectedAlbum: Album
  albums$: Observable<Album[]>

    @Input()
    album: Album;

  constructor(private albumService: AlbumService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.albums$ = this.albumService.loadCourses()
   }

  onSaveClicked(album:Album, title:string) {
    this.albumService.saveAlbum({...album, title}).subscribe(() => console.log("album saved!") )
    }


  onSelect(album: Album): void {
    this.selectedAlbum = album;
    this.messageService.add(`HeroesComponent: Selected hero id=${album.artistId}`);
}

}
