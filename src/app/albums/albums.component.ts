import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Album } from '../model/album';
import { Location } from '@angular/common';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  userForm: FormGroup;
  albums: Album[];

  constructor(private albumService: AlbumService, private location: Location) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumService.getAlbums().subscribe((albums) => (this.albums = albums));
  }

  delete(id: string): void {
    this.albums = this.albums.filter((album) => album._id !== id);
    this.albumService.deleteAlbum(id).subscribe();
  }

  onCardDeleted(id: string) {
    this.delete(id);
  }

  goBack(): void {
    this.location.back();
  }
}
