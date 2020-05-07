import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutelistComponent } from './route-list.component';

describe('RouteListComponent', () => {
  let component: RoutelistComponent;
  let fixture: ComponentFixture<RoutelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
