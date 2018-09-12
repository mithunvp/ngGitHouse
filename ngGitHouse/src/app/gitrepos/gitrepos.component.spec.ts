import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitreposComponent } from './gitrepos.component';

describe('GitreposComponent', () => {
  let component: GitreposComponent;
  let fixture: ComponentFixture<GitreposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitreposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitreposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
