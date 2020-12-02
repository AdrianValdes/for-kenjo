import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import {Album} from "../model/album"
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
    @Input()
    album: Album;

    @Output('albumChanged')
    albumEmitter = new EventEmitter<Album>();

  constructor() { }

  ngOnInit(): void {
  }

  onSaveClicked(title:string) {
//we create a copy of the course with ...this.course, and then we override description
        this.albumEmitter.emit({...this.album, title});
    console.log(title);

    }
}
