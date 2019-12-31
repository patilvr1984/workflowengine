import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ISelectionEventArgs} from 'igniteui-angular';
import * as xml2js from 'xml2js';
import {TemplateConfiguration, Template, CaseEventOperation,
        CaseEventOperationList, CaseTimestamp, CaseTimestampList} from '../model/Template';


const xmlinput = '<TemplateConfiguration>' +
  '<Template' +
  'id = "100"' +
  'name = "Daily process activation"' +
  'description = "Template that holds basic functions to activate changes of delivery site,meter, equipment etc.">' +
  '<CaseTimestampList>' +
  '<CaseTimestamp>' +
  '<TimestampId>336</TimestampId>' +
  '<SortOrder>200</SortOrder>' +
  '<EnableGUI>0</EnableGUI>' +
  '<EnableClear>1</EnableClear>' +
  '<CaseEventOperationList>' +
  '<CaseEventOperation>' +
  '<id>1</id>' +
  '<OperationId>10001</OperationId>' +
  '<EventName>TSS:336</EventName>' +
  '<ExecutionOrder>20000</ExecutionOrder>' +
  '<Parameters>TIMESTAMP_ID=25:EVERY_TS_IS_NOT_SET_LIST=1723</Parameters>' +
  '</CaseEventOperation>' +
  '<CaseEventOperation>' +
  '<id>2</id>' +
  '<OperationId>10097</OperationId>' +
  '<EventName>TSS:336</EventName>' +
  '<ExecutionOrder>1900</ExecutionOrder>' +
  '<Parameters>SET_MISC_INFO_TYPE=87:SPECIAL_VALUE=EMPTY</Parameters>' +
  '</CaseEventOperation>' +
  '</CaseEventOperationList>' +
  '</CaseTimestamp>' +
  '</CaseTimestampList>' +
  '</Template>' +
  '</TemplateConfiguration>'
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
  public jsonString = '';
  public emplateConfiguration: TemplateConfiguration;
  // @ts-ignore
  templates: Template[];
  private templateConfiguration: TemplateConfiguration;
  constructor(private router: Router) {

    const parser = new xml2js.Parser({ strict: false, trim: true });
    parser.parseString(xmlinput, (err, result) => {
      this.jsonString = result;
    });
    this.templateConfiguration = JSON.parse(this.jsonString);
    /*this.templates = [
        new Template{TemplateCon: 100, templateName: 'Daily Process Activation', templateDesc: 'Daily Process Activation'},
        {templateId: 101, templateName: 'Blocked Timestamp', templateDesc: 'Blocked Timestamp'},
        {templateId: 102, templateName: 'Rollback Installation changes', templateDesc: 'Rollback Installation changes'}
      ];*/
  }

  ngOnInit() {
  }

  public showTemplate(event: ISelectionEventArgs) {
    /*this.selectedTemplate = this.templates.find(t => t.templateId === event.newSelection.value);
    this.showTemplateView = true;
    const parser = new xml2js.Parser({ strict: false, trim: true });
    parser.parseString(xmlinput, (err, result) => {
      this.jsonString = result;
    });*/
  }

  onNewTemplateSave(event) {

    /*const newTemplate = new Template();
    newTemplate.templateId = 104;
    newTemplate.templateName = this.newTemplateName;
    newTemplate.templateDesc = this.newTemplateDesc;
    this.templates.push(newTemplate);
    event.dialog.close();*/
  }



}
