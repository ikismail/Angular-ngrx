import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from "@angular/router";
import { BannerComponent } from "./banner/banner.component";
import { AlbumComponent } from "./album/album.component";
import { StoreModule } from "@ngrx/store";
import * as fromAlbum from "../../core/store/reducers/person.reducer";
import { EffectsModule } from "@ngrx/effects";
import { PersonEffects } from "../../core/store/effects/person.effects";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("persons", fromAlbum.reducer),
    EffectsModule.forFeature([PersonEffects])
  ],
  declarations: [HomeComponent, BannerComponent, AlbumComponent],
  providers: []
})
export class HomeModule {}
