import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitIdeaComponent } from './submit-idea.component';

describe('SumbitIdeaComponent', () => {
  let component: SubmitIdeaComponent;
  let fixture: ComponentFixture<SubmitIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitIdeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
