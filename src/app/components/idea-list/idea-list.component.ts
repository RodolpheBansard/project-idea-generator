import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {

  ideas: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.ideas = firestore.collection('Idea').valueChanges();
  }

  ngOnInit(): void {
  }



}
