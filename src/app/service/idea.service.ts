import {Injectable} from '@angular/core';
import {Idea} from "../model/idea";
import {BehaviorSubject, Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {CookieService} from "./cookie.service";

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  ideas$: Observable<Idea[]>;
  ideas: Idea[] = [];
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(private firestore: AngularFirestore,
              private cookieService:CookieService) {
    this.ideas$ = firestore.collection<Idea>('Idea').valueChanges({idField:'id'})
    this.ideas$.subscribe((data)=> {
      this.ideas = data;
      if(!this.loading$.getValue()){
        this.loading$.next(true);
      }

    })
  }


  getRandomId(): string{
      const random = Math.floor(Math.random() * this.ideas.length);
      return this.ideas[random].id;

  }

  getIdea(id: string): Observable<Idea>{
    return this.firestore.doc<Idea>("Idea/" + id).valueChanges({idField:'id'});
  }


  addLike(idea :Idea):void{
    if(!this.cookieService.isCookieAlreadyExist(idea.id)){
      this.firestore.collection<Idea>('Idea').doc(idea.id).update({likeNumber:idea.likeNumber+1}).then(
        () => {
          this.cookieService.setCookie(idea.id,idea.id,1);
        }
      )
    }
  }

  removeLike(idea :Idea):void{
    this.firestore.collection<Idea>('Idea').doc(idea.id).update({likeNumber:idea.likeNumber-1}).then(
      () => {
        console.log('remove')
        this.cookieService.removeCookie(idea.id,idea.id);
      }
    )

  }




}
