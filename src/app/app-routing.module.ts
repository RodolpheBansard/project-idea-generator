import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IdeaListComponent} from "./components/idea-list/idea-list.component";
import {RandomIdeaComponent} from "./components/random-idea/random-idea.component";
import {SubmitIdeaComponent} from "./components/sumbit-idea/submit-idea.component";

const routes: Routes = [
  {path: 'idea-list', component:IdeaListComponent},
  {path: 'random-idea', component:RandomIdeaComponent},
  {path: 'submit-idea', component:SubmitIdeaComponent},
  {path: '**', redirectTo:'idea-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
