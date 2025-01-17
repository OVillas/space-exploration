import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { ContactComponent } from './components/contact/contact.component';
import { PictureComponent } from './components/picture/picture.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'picture', component: PictureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
