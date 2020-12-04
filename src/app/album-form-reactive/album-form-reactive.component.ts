import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Album } from '../model/album';
import { AlbumService } from '../services/album.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-form-reactive',
  templateUrl: './album-form-reactive.component.html',
  styleUrls: ['./album-form-reactive.component.css'],
})
export class AlbumFormReactiveComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  @Input() album: Album;
  @Input() action: string;

  constructor(
    private fb: FormBuilder,
    private albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', [Validators.required]],
      genre: '',
      year: [
        '',
        [Validators.min(1909), Validators.max(2030), Validators.pattern(/\d/)],
      ],
      coverUrl: '',
    });

    if (this.album) {
      this.fillAlbum();
    }
  }

  updateAlbum(album: Album): void {
    if (!album) {
      return;
    }

    this.albumService
      .updateAlbum({ ...this.album, ...album })
      .subscribe((album) => (this.album = { ...this.album, ...album }));
    this.location.back();
  }
  createAlbum(album: Album): void {
    if (!album) {
      return;
    }
    this.albumService.addAlbum(album).subscribe((album) => {});
  }

  onSubmit() {
    switch (this.action) {
      case 'update':
        this.updateAlbum(this.myForm.value);
        this.submitted = true;
        break;
      case 'create':
        this.createAlbum(this.myForm.value);
        this.submitted = true;
      default:
        break;
    }
  }

  get year() {
    return this.myForm.get('year');
  }

  fillAlbum() {
    this.myForm.patchValue({
      title: this.album.title,
      genre: this.album.genre,
      year: this.album.year,
      coverUrl: this.album.coverUrl,
    });
  }
}
