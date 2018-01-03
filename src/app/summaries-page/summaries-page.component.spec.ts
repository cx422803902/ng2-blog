import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesPageComponent } from './summaries-page.component';

describe('SummariesPageComponent', () => {
  let component: SummariesPageComponent;
  let fixture: ComponentFixture<SummariesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummariesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
