import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artist } from '../model/artist';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrls: ['./card-artist.component.css'],
})
export class CardArtistComponent implements OnInit {
  @Input() artist: Artist;
  @Output() cardDeleted = new EventEmitter();
  constructor(public router: Router) {}

  ngOnInit(): void {}
  deleteCard() {
    this.cardDeleted.emit(this.artist._id);
  }
}
