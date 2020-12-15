import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Artist } from '../model/artist';
import { ArtistService } from '../services/artist.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../model/album';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css'],
})
export class ArtistDetailComponent implements OnInit {
  artist: Artist;
  albums: Album[];

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService,
    private location: Location,
    private albumService: AlbumService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getArtist();
    this.getAlbums();
  }

  getArtist(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.artistService
      .getArtist(id)
      .subscribe((artist) => (this.artist = artist));
  }

  goBack(): void {
    this.location.back();
  }

  //Handeling connection between Artists an albums
  getAlbums(): void {
    this.albumService.getAlbums().subscribe((albums) => (this.albums = albums));
  }
}
