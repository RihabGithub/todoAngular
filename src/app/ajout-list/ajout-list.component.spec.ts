import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutListComponent } from './ajout-list.component';

describe('AjoutListComponent', () => {
  let component: AjoutListComponent;
  let fixture: ComponentFixture<AjoutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
