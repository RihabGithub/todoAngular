import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from 'src/app/connection/connection.component';
import { HomeComponent } from 'src/app/home/home.component';
import { InscriptionComponent } from 'src/app/inscription/inscription.component';
import { TodoListComponent } from 'src/app/todo-list/todo-list.component';
import { AjoutListComponent } from 'src/app/ajout-list/ajout-list.component';
import { ModifListComponent } from 'src/app/modif-list/modif-list.component';
import { NavComponent } from 'src/app/nav/nav.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { TestComponent } from 'src/app/test/test.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  { 
    path:'login',
    component: ConnectionComponent
  },
  {
    path:'inscription',
    component: InscriptionComponent
  },
  {
    path:'tolist',
    component: TodoListComponent
  },
  {
    path:'addlist',
    component: AjoutListComponent
  },
  {
    path:'updatelist',
    component: ModifListComponent
  },
  {
    path:'nav',
    component: NavComponent
  },
  {
    path:'footer',
    component: FooterComponent
  },
  {
    path:'test',
    component: TestComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
