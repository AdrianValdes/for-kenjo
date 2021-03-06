import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Artist } from '../model/artist';
import { ArtistService } from '../services/artist.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artist-form-reactive',
  templateUrl: './artist-form-reactive.component.html',
  styleUrls: ['./artist-form-reactive.component.css'],
})
export class ArtistFormReactiveComponent implements OnInit {
  artistForm: FormGroup;
  submitted = false;
  minDate: Date;
  maxDate: Date;
  error: string;
  success: string;
  @Input() artist: Artist;
  @Input() action: string;

  constructor(
    private fb: FormBuilder,
    private artistService: ArtistService,
    private location: Location
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 111, 0, 1);
    this.maxDate = new Date(currentYear + 10, 11, 31);
  }

  ngOnInit(): void {
    this.artistForm = this.fb.group({
      name: ['', [Validators.required]],
      birthdate: '',
      deathDate: '',
      photoUrl: '',
    });

    if (this.artist) {
      this.fillArtistData();
    }
  }

  fillArtistData() {
    this.artistForm.patchValue({
      name: this.artist.name,
      birthdate: this.artist.birthdate,
      deathDate: this.artist.deathDate,
      photoUrl: this.artist.photoUrl,
    });
  }

  updateArtist(artist: Artist): void {
    if (!artist) {
      return;
    }
    this.artistService.updateArtist({ ...this.artist, ...artist }).subscribe(
      (artist) => (this.artist = { ...this.artist, ...artist }),
      (error) => this.handleRequestError(error),
      () => this.handleRequestSuccess()
    );
  }

  createArtist(artist: Artist): void {
    if (!artist) {
      return;
    }
    this.artistService.addArtist(artist).subscribe(
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
        this.updateArtist(this.artistForm.value);
        break;
      case 'create':
        this.createArtist(this.artistForm.value);
        break;
      default:
        break;
    }
  }

  goBack(): void {
    this.location.back();
  }

  get artistFormControl() {
    return this.artistForm.controls;
  }
}
