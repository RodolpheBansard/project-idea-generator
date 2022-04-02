import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Idea} from "../../model/idea";
import {IdeaService} from "../../service/idea.service";

@Component({
  selector: 'app-random-idea',
  templateUrl: './random-idea.component.html',
  styleUrls: ['./random-idea.component.scss']
})
export class RandomIdeaComponent {

  randomIdea$! : Observable<Idea>;

  constructor(private ideaService: IdeaService) {
    this.reloadIdea();
  }

  reloadIdea(){

    this.ideaService.loading$.subscribe(isLoaded => {
      if(isLoaded){
        let randomId = this.ideaService.getRandomId();
        if(randomId){
          this.randomIdea$ = this.ideaService.getIdea(randomId);
        }
      }
    })



  }



}
