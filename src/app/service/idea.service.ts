import { Injectable } from '@angular/core';
import {Idea} from "../model/idea";
import {BehaviorSubject, Observable, Subject, Subscription} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  ideas$: Observable<Idea[]>;
  ideas: Idea[] = [];
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(private firestore: AngularFirestore) {
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
    this.firestore.collection<Idea>('Idea').doc(idea.id).update({likeNumber:idea.likeNumber+1})
  }


}
