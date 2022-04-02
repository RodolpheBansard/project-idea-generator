import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { HeaderComponent } from './components/header/header.component';
import { IdeaListComponent } from './components/idea-list/idea-list.component';
import { RandomIdeaComponent } from './components/random-idea/random-idea.component';
import { SubmitIdeaComponent } from './components/sumbit-idea/submit-idea.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFireFunctionsModule} from "@angular/fire/compat/functions";
import { IdeaCardComponent } from './components/idea-card/idea-card.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IdeaListComponent,
    RandomIdeaComponent,
    SubmitIdeaComponent,
    IdeaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
