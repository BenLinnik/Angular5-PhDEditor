import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { EditorpageComponent } from './editorpage.component';

const routes: Routes = [
  Route.withShell([
    { path: 'editor', component: EditorpageComponent, data: { title: extract('Editor') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EditorpageRoutingModule { }
