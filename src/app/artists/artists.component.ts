import { Component, OnInit } from '@angular/core';
import { Artist } from '../model/artist';
import { Location } from '@angular/common';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent implements OnInit {
  artists: Artist[];
  constructor(
    private artistService: ArtistService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getArtists();
  }

  getArtists(): void {
    this.artistService
      .getArtists()
      .subscribe((artists) => (this.artists = artists));
  }

  delete(id: string): void {
    this.artists = this.artists.filter((artist) => artist._id !== id);
    this.artistService.deleteArtist(id).subscribe();
  }

  onCardDeleted(id: string) {
    this.delete(id);
  }

  goBack(): void {
    this.location.back();
  }
}
