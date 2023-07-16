import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';
import { AddEditHeroComponent } from './components/add-edit-hero/add-edit-hero.component';

const routes: Routes = [
  { path: '', component: ListHeroesComponent },
  { path: 'add', component: AddEditHeroComponent },
  { path: 'edit/:id', component: AddEditHeroComponent },
  { path: '**', component: ListHeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
