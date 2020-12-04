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
  myForm: FormGroup;
  submitted = false;
  minDate: Date;
  maxDate: Date;
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
    this.myForm = this.fb.group({
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
    this.myForm.patchValue({
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
    this.artistService
      .updateArtist({ ...this.artist, ...artist })
      .subscribe((artist) => (this.artist = { ...this.artist, ...artist }));
  }

  createArtist(artist: Artist): void {
    if (!artist) {
      return;
    }
    this.artistService.addArtist(artist).subscribe();
  }

  onSubmit() {
    switch (this.action) {
      case 'update':
        this.updateArtist(this.myForm.value);
        this.submitted = true;
        this.location.back();
        break;
      case 'create':
        this.createArtist(this.myForm.value);
        this.submitted = true;

        break;
      default:
        break;
    }
  }

  get birthdate() {
    return this.myForm.get('birthdate');
  }
}
