import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isBurgerOpened = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleBurgerMenu(){
    this.isBurgerOpened = !this.isBurgerOpened;
  }

  navigateToIdeasList(){
    this.router.navigateByUrl('idea-list');
  }
  navigateToRandomIdea(){
    this.router.navigateByUrl('random-idea');
  }
  navigateToSubmitIdea(){
    this.router.navigateByUrl('submit-idea');
  }

}
