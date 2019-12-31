import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowengineComponent } from './workflowengine.component';

describe('WorkflowengineComponent', () => {
  let component: WorkflowengineComponent;
  let fixture: ComponentFixture<WorkflowengineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowengineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
