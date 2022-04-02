import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Idea} from "../../model/idea";
import {IdeaService} from "../../service/idea.service";
import {CookieService} from "../../service/cookie.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.scss'],
  animations:[
    trigger('imageState',[
      state('rotate',style({
        transform:'rotate(0) rotate(360deg)'
      })),
      transition('* => *',animate('.3s ease-out'))
    ])
  ]
})
export class IdeaCardComponent implements OnInit {

  position:string

  changePosition(pos:string){
    this.position = pos;
  }

  @Input()
  idea!: Idea;

  @Input()
  isReloadAble = false;

  @Output()
  reloadIdeaEmitter : EventEmitter<void> = new EventEmitter<void>();

  constructor(private ideaService: IdeaService,
              private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  reloadIdea(){
    this.reloadIdeaEmitter.emit();
    this.changePosition('rotate');
  }

  addLike(idea :Idea){
    this.ideaService.addLike(idea);
  }
  removeLike(idea :Idea){
    this.ideaService.removeLike(idea);
  }

  alreadyLiked(idea : Idea){
    return this.cookieService.isCookieAlreadyExist(idea.id)
  }
}
