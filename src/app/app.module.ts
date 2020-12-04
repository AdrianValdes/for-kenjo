import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';
import { MessagesComponent } from './messages/messages.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumFormUpdateReactiveComponent } from './album-form-update-reactive/album-form-update-reactive.component';

import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';

import { ArtistFormUpdateReactiveComponent } from './artist-form-update-reactive/artist-form-update-reactive.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    MessagesComponent,
    AlbumDetailComponent,
    DashboardComponent,
    AlbumFormUpdateReactiveComponent,
    ArtistsComponent,
    ArtistDetailComponent,
    ArtistFormUpdateReactiveComponent,
    ArtistSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
