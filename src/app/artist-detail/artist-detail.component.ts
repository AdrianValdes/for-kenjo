import { Component, OnInit, Input } from '@angular/core';
import {Artist} from "../model/artist"
import {ArtistService} from "../services/artist.service"
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
 artist: Artist;

  constructor(private route: ActivatedRoute,
  private artistService: ArtistService,
  private location: Location) { }

  ngOnInit(): void {
    this.getArtist();
  }
  getArtist(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.artistService.getArtist(id)
    .subscribe(artist => this.artist = artist);
  }
  goBack(): void {
    this.location.back();
  }
}
