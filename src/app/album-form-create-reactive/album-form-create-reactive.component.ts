import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Album} from "../model/album";
import {AlbumService} from "../services/album.service"

@Component({
  selector: 'app-album-form-create-reactive',
  templateUrl: './album-form-create-reactive.component.html',
  styleUrls: ['./album-form-create-reactive.component.css']
})
export class AlbumFormCreateReactiveComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;

  @Input() album:Album

  constructor(private fb: FormBuilder, private albumService: AlbumService) { }


  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ["", [Validators.required] ],
      genre: "",
      year: ["", [Validators.min(1909), Validators.max(2030), Validators.pattern(/\d/)]],
      coverUrl: ""
    })

    /* if(this.album){this.fillAlbum()} */

  }

add(album: Album): void {
    if (!album) { return; }
    this.albumService.addAlbum( album ).subscribe(album => {   });
}

onSubmit() {
  console.log(this.myForm.value);
  this.add(this.myForm.value)
  }

get year(){
  return this.myForm.get("year")
}

/* fillAlbum(){
  this.myForm.patchValue({
    title: this.album.title,
    genre: this.album.genre,
    year: this.album.year,
    coverUrl: this.album.coverUrl
  })
} */

}
