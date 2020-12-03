import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Album} from "../model/album";
import {AlbumService} from "../services/album.service"
import { Location } from '@angular/common';
@Component({
  selector: 'app-album-form-update-reactive',
  templateUrl: './album-form-update-reactive.component.html',
  styleUrls: ['./album-form-update-reactive.component.css']
})
export class AlbumFormUpdateReactiveComponent implements OnInit {

myForm: FormGroup;
submitted = false;
@Input() album:Album



  constructor(private fb: FormBuilder, private albumService: AlbumService,private location: Location) { }

  /* ngOnChanges(change: SimpleChange) {
    console.log(change);
  } */

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ["", [Validators.required] ],
      genre: "",
      year: ["", [Validators.min(1909), Validators.max(2030), Validators.pattern(/\d/)]],
      coverUrl: "",
      artistId: ""
    })

    if(this.album){this.updateAlbum()}

  }
  add(album: Album): void {
    if (!album) { return; }
    console.log({...this.album, ...album});

     this.albumService.updateAlbum({...this.album, ...album}).subscribe(album => this.album = {...this.album, ...album});
      this.location.back();
  }

onSubmit() {
  console.log(this.album);

   this.add(this.myForm.value)
   this.submitted = true;
}

get year(){
  return this.myForm.get("year")
}

updateAlbum(){
  this.myForm.patchValue({
    title: this.album.title,
    genre: this.album.genre,
    year: this.album.year,
    coverUrl: this.album.coverUrl,
    artistId: this.album.artistId
  })
}


}
