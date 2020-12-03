import { Component, OnInit } from '@angular/core';
import {Album} from "../model/album"
import {AlbumService} from "../services/album.service"
@Component({
  selector: 'app-album-form-create',
  templateUrl: './album-form-create.component.html',
  styleUrls: ['./album-form-create.component.css']
})
export class AlbumFormCreateComponent implements OnInit {
  submitted= false
  album:Album
  constructor(private albumService: AlbumService,) { }

  ngOnInit(): void {
  }

add(album: Album): void {
    if (!album) { return; }
    this.albumService.addAlbum( album ).subscribe(album => {   });
}

onSubmit(album: Album) {
  this.add(album)
  this.submitted = true;
  }
  log(year:number){
    console.log(year);

  }
}
