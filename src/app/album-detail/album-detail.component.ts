import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album';
import { AlbumService } from '../services/album.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../model/artist';
import { ArtistService } from '../services/artist.service';
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  artists: Artist[];
  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private artistService: ArtistService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAlbum();
    this.getArtists();
  }

  getAlbum(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.albumService.getAlbum(id).subscribe((album) => (this.album = album));
  }

  goBack(): void {
    this.location.back();
  }

  getArtists(): void {
    this.artistService
      .getArtists()
      .subscribe((artists) => (this.artists = artists));
  }
}
