import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifListComponent } from './modif-list.component';

describe('ModifListComponent', () => {
  let component: ModifListComponent;
  let fixture: ComponentFixture<ModifListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
