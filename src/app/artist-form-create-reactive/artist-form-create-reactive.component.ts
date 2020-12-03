import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Artist} from "../model/artist";
import {ArtistService} from "../services/artist.service"
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-artist-form-create-reactive',
  templateUrl: './artist-form-create-reactive.component.html',
  styleUrls: ['./artist-form-create-reactive.component.css']
})
export class ArtistFormCreateReactiveComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private artistService: ArtistService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ["", [Validators.required] ],
      birthdate: ["", [Validators.min(1909), Validators.max(2030)]],
      deathDate: "",
      photoUrl: ""
    })

    }

    add(artist: Artist): void {
      if (!artist) { return; }
      this.artistService.addArtist( artist ).subscribe();
    }

    onSubmit() {

      this.add(this.myForm.value)
    }

    get birthdate(){
  return this.myForm.get("birthdate")
}

}
