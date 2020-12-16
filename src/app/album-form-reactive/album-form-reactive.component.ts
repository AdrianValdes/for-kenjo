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
  albumForm: FormGroup;
  submitted = false;
  error: string;
  success: string;
  @Input() album: Album;
  @Input() action: string;

  constructor(
    private fb: FormBuilder,
    private albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.albumForm = this.fb.group({
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

  fillAlbum() {
    this.albumForm.patchValue({
      title: this.album.title,
      genre: this.album.genre,
      year: this.album.year,
      coverUrl: this.album.coverUrl,
    });
  }

  updateAlbum(album: Album): void {
    if (!album) {
      return;
    }
    this.albumService.updateAlbum({ ...this.album, ...album }).subscribe(
      (album: Album) => (this.album = { ...this.album, ...album }),
      (error) => this.handleRequestError(error),
      () => this.handleRequestSuccess()
    );
  }

  createAlbum(album: Album): void {
    if (!album) {
      return;
    }
    this.albumService.addAlbum(album).subscribe(
      () => {},
      (error) => this.handleRequestError(error),
      () => this.handleRequestSuccess()
    );
  }

  handleRequestError(error: string) {
    console.log(error);
    this.error = error;
  }

  handleRequestSuccess() {
    this.success = `Operation success!`;
    this.error = '';
    console.log('Observer got a complete notification');
    this.submitted = true;
    this.location.back();
  }

  onSubmit() {
    switch (this.action) {
      case 'update':
        this.updateAlbum(this.albumForm.value);
        break;
      case 'create':
        this.createAlbum(this.albumForm.value);
        break;
      default:
        break;
    }
  }

  get year() {
    return this.albumForm.get('year');
  }
}
