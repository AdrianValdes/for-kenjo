import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css'],
})
export class AlbumCreateComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}
}
