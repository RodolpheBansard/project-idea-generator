import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Idea} from "../../model/idea";
import {IdeaService} from "../../service/idea.service";


@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {

  ideas: Observable<Idea[]>;
  constructor(private ideaService: IdeaService) {
    this.ideas = this.ideaService.ideas$;
  }

  ngOnInit(): void {
  }




}
