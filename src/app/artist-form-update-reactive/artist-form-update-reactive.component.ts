import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Artist} from "../model/artist";
import {ArtistService} from "../services/artist.service"
import { Location } from '@angular/common';
@Component({
  selector: 'app-artist-form-update-reactive',
  templateUrl: './artist-form-update-reactive.component.html',
  styleUrls: ['./artist-form-update-reactive.component.css']
})
export class ArtistFormUpdateReactiveComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;

  @Input() artist:Artist
  constructor(private fb: FormBuilder, private artistService: ArtistService
    ,private location: Location) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ["", [Validators.required] ],
      birthdate: "",
      deathDate: "",
      photoUrl: "",
      _id: ""
    })

    if(this.artist){this.updateArtist()}
  }

  updateArtist(){
  this.myForm.patchValue({
    name: this.artist.name,
    birthdate: this.artist.birthdate,
    deathDate: this.artist.deathDate,
    photoUrl: this.artist.photoUrl,
    _id: this.artist._id
  })
  }


add(artist: Artist): void {
    if (!artist) { return; }

     this.artistService.updateArtist({...this.artist, ...artist}).subscribe(artist => this.artist = {...this.artist, ...artist});
      // this.location.back();
  }

onSubmit() {

   this.add(this.myForm.value)
   this.submitted = true;
}

    get birthdate(){
  return this.myForm.get("birthdate")
  }
}
