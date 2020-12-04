import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from '../model/album';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() album: Album;
  @Output() cardDeleted = new EventEmitter();

  constructor(public router: Router) {}

  ngOnInit(): void {}

  deleteCard() {
    this.cardDeleted.emit(this.album._id);
  }
}
