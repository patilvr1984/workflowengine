import { Component, OnInit } from '@angular/core';
import {Template} from '../model/Template';
import {Router} from '@angular/router';
import {ISelectionEventArgs} from 'igniteui-angular';

@Component({
  selector: 'app-workflowtemplate',
  templateUrl: './workflowtemplate.component.html',
  styleUrls: ['./workflowtemplate.component.css']
})
export class WorkflowtemplateComponent implements OnInit {
  public newTemplateName = '';
  public newTemplateDesc = '';
  public showTemplateView = false;
  public selectedTemplate: Template;
  // @ts-ignore
  templates: Template[];
  constructor(private router: Router) {
    this.templates = [
        {templateId: 100, templateName: 'Daily Process Activation', templateDesc: 'Daily Process Activation'},
        {templateId: 101, templateName: 'Blocked Timestamp', templateDesc: 'Blocked Timestamp'},
        {templateId: 102, templateName: 'Rollback Installation changes', templateDesc: 'Rollback Installation changes'}
      ];
  }

  ngOnInit() {
  }

  public showTemplate(event: ISelectionEventArgs) {
    this.selectedTemplate = this.templates.find(t => t.templateId === event.newSelection.value);
    this.showTemplateView = true;
  }

  onNewTemplateSave(event) {
    const newTemplate = new Template();
    newTemplate.templateId = 104;
    newTemplate.templateName = this.newTemplateName;
    newTemplate.templateDesc = this.newTemplateDesc;
    this.templates.push(newTemplate);
    event.dialog.close();
  }

}
