import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album';
import { Artist } from '../model/artist';
import { AlbumService } from '../services/album.service';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  albums: Album[] = [];
  artists: Artist[] = [];
  constructor(
    private albumService: AlbumService,
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {
    this.getAlbums();
    this.getArtists();
  }

  getAlbums(): void {
    this.albumService
      .getAlbums()
      .subscribe((albums) => (this.albums = albums.slice(0, 4)));
  }
  getArtists(): void {
    this.artistService
      .getArtists()
      .subscribe((artists) => (this.artists = artists.slice(0, 4)));
  }
}
