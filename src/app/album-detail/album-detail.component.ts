import { Component, OnInit, Input } from '@angular/core';
import {Album} from "../model/album"
import {AlbumService} from "../services/album.service"
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
 album: Album;
  constructor(private route: ActivatedRoute,
  private albumService: AlbumService,
  private location: Location) { }

  ngOnInit(): void {
    this.getAlbum();
  }
  getAlbum(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.albumService.getAlbum(id)
    .subscribe(album => this.album = album);
  }
  goBack(): void {
    this.location.back();
  }

}
