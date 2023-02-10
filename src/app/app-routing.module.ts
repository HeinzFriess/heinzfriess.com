import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [
  { path: '', component: SlideshowComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'dataprotection', component: DataprotectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
