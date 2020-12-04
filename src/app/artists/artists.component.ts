import { Component, OnInit, Input, Output } from '@angular/core';
import { Artist } from '../model/artist';
import { MessageService } from '../services/message.service';

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
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
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
}
