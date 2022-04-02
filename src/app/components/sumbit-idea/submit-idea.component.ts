import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Idea} from "../../model/idea";

@Component({
  selector: 'app-sumbit-idea',
  templateUrl: './submit-idea.component.html',
  styleUrls: ['./submit-idea.component.scss']
})
export class SubmitIdeaComponent implements OnInit {

  newIdeaForm!: FormGroup;
  ideaCollection! : AngularFirestoreCollection<Idea>;

  constructor(private formBuilder: FormBuilder,
              private firestoreCollection : AngularFirestore) {
    this.ideaCollection = firestoreCollection.collection<Idea>('Idea');
  }

  ngOnInit(): void {
    this.newIdeaForm = this.formBuilder.group({
      title: ['',[Validators.required]],
      description:['',[Validators.required]],
    })
  }

  postIdea(){
    let idea = {
      title: this.newIdeaForm.value.title,
      description: this.newIdeaForm.value.title,
      creationDate: new Date().toDateString(),
      likeNumber: 0
    }
    this.ideaCollection.add(idea);
  }

}
