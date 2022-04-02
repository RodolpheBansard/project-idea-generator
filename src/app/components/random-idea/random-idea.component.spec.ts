import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomIdeaComponent } from './random-idea.component';

describe('RandomIdeaComponent', () => {
  let component: RandomIdeaComponent;
  let fixture: ComponentFixture<RandomIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomIdeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
