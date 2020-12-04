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
  @Input() artist: Artist;
  @Input() action: string;

  constructor(
    private fb: FormBuilder,
    private artistService: ArtistService,
    private location: Location
  ) {}

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
    //this.location.back();
  }

  createArtist(artist: Artist): void {
    if (!artist) {
      return;
    }
    this.artistService.addArtist(artist).subscribe();
  }

  onSubmit() {
    console.log(this.action);
    switch (this.action) {
      case 'update':
        this.updateArtist(this.myForm.value);
        this.submitted = true;
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
