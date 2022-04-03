import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Idea} from "../../model/idea";
import {IdeaService} from "../../service/idea.service";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {

  currentFilter : string = '';

  ideas: Observable<Idea[]>;
  constructor(private ideaService: IdeaService) {
    this.ideas = this.ideaService.ideas$;

  }

  ngOnInit(): void {
  }

  filterIdea(value:string){
    this.currentFilter=value;

    if(value === 'popular'){
      this.ideas = this.ideaService.ideas$.pipe(map((data) =>{
        data.sort((a,b) => (a.likeNumber > b.likeNumber ? -1 : 1));
        return data;
      }));
    }
    else if(value === 'new'){
      this.ideas = this.ideaService.ideas$.pipe(map((data) =>{
        data.sort((a,b) => (a.creationDate > b.creationDate ? -1 : 1));
        return data;
      }));
    }
    else if(value === 'old'){
      this.ideas = this.ideaService.ideas$.pipe(map((data) =>{
        data.sort((a,b) => (a.creationDate > b.creationDate ? 1 : -1));
        return data;
      }));
    }
  }


}
