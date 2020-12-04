import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { AlbumCreateComponent } from './album-create/album-create.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'detail/:id', component: AlbumDetailComponent },
  { path: 'createAlbum', component: AlbumCreateComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'detailArtist/:id', component: ArtistDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
