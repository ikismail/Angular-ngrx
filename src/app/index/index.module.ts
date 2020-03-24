import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndexComponent } from "./index.component";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../views/home/home.module").then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [IndexComponent, NavbarComponent]
})
export class IndexModule {}
