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

  tags : string[] = [];

  constructor(private formBuilder: FormBuilder,
              private firestoreCollection : AngularFirestore) {
    this.ideaCollection = firestoreCollection.collection<Idea>('Idea');
  }

  ngOnInit(): void {
    this.newIdeaForm = this.formBuilder.group({
      title: ['',[Validators.required]],
      description:['',[Validators.required]],
      tag:[''],
    })
  }

  postIdea(){
    let idea = {
      title: this.newIdeaForm.value.title,
      description: this.newIdeaForm.value.description,
      creationDate: new Date().toUTCString(),
      likeNumber: 0,
      tags: this.tags
    }
    this.ideaCollection.add(idea);
    this.newIdeaForm.reset();
  }


  addTag(){
    this.tags.push(this.newIdeaForm.value.tag);
    this.newIdeaForm.patchValue({tag:''});
    this.tags = [];
  }
  deleteTag(index:number){
    this.tags.splice(index,1)
  }
}
