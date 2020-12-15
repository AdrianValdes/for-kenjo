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
import { AlbumFormReactiveComponent } from './album-form-reactive/album-form-reactive.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistFormReactiveComponent } from './artist-form-reactive/artist-form-reactive.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';

//Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CardArtistComponent } from './card-artist/card-artist.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    MessagesComponent,
    AlbumDetailComponent,
    DashboardComponent,
    AlbumFormReactiveComponent,
    ArtistsComponent,
    ArtistDetailComponent,
    ArtistFormReactiveComponent,
    ArtistSearchComponent,
    MainNavComponent,
    CardComponent,
    AlbumCreateComponent,
    CardArtistComponent,
    ArtistCreateComponent,
    AddNewItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
