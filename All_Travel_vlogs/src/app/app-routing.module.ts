import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { VlogSeriesComponent } from './vlog-series/vlog-series.component';
import { startsWith } from './router.utils';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'mfe1/home', component: VlogSeriesComponent , data: { importName: 'mfe1', elementName: 'app-whole-element' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
