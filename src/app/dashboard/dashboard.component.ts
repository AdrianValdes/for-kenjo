import { Component, OnInit } from '@angular/core';
import {Album} from "../model/album";
import {AlbumService} from "../services/album.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  albums: Album[] = []

  constructor(private albumService: AlbumService ) { }

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums(): void {
    this.albumService.getAlbums().subscribe(albums => this.albums = albums.slice(0,3))
  }

}
