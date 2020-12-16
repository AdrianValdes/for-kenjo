import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Album } from '../model/album';
import { Artist } from '../model/artist';
import { ArtistService } from '../services/artist.service';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css'],
})
export class ArtistSearchComponent implements OnInit {
  artists: Artist[];
  searchedArtists: Artist[];

  @Input() album: Album;

  constructor(
    private artistService: ArtistService,
    private albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists(): void {
    this.artistService
      .getArtists()
      .subscribe((artists) => (this.artists = artists));
  }

  search(query: string) {
    if (!query.trim()) {
      return (this.searchedArtists = []);
    }
    const regex = new RegExp(query, 'i');
    this.searchedArtists = this.artists.filter((artist) =>
      regex.test(artist.name)
    );
  }

  bindArtistToAlbum() {
    const artistId = this.searchedArtists[0]._id;
    this.albumService.updateAlbum({ ...this.album, artistId }).subscribe();
    this.location.back();
  }
}
