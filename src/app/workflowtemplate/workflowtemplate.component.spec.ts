import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowtemplateComponent } from './workflowtemplate.component';

describe('WorkflowtemplateComponent', () => {
  let component: WorkflowtemplateComponent;
  let fixture: ComponentFixture<WorkflowtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
