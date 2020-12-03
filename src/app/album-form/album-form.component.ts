import { Component, Input, OnInit } from '@angular/core';
import {Album} from "../model/album"
import {AlbumService} from "../services/album.service"
@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent implements OnInit {
 submitted = false;


 @Input()
 album:Album

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }
  add(album: Album): void {

    if (!album) { return; }
    this.albumService.updateAlbum(album).subscribe(album => this.album = album);
  }

onSubmit() {
  this.add(this.album)
   this.submitted = true;
  }
}
