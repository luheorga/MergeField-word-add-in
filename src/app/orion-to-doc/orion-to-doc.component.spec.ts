import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrionToDocComponent } from './orion-to-doc.component';

describe('OrionToDocComponent', () => {
  let component: OrionToDocComponent;
  let fixture: ComponentFixture<OrionToDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrionToDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrionToDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
