import { Component, OnInit } from '@angular/core';

export class JSON {
  TemplateConfiguration: TemplateConfiguration;
}
export class TemplateConfiguration {
  Template: Template[];
}

export class Template {
  '-id': string;
  '-name': string;
  '-description'?: string;
  CaseTimestampList?: CaseTimestampList;
  CaseMethods?: CaseMethods;
}

export class CaseMethods {
  CaseEventOperationList?: CaseMethodsCaseEventOperationList;
}

export class CaseMethodsCaseEventOperationList {
  CaseEventOperation: PurpleCaseEventOperation[] | PurpleCaseEventOperation;
}

export class PurpleCaseEventOperation {
  id?: string;
  OperationId: string;
  ExecutionOrder?: string;
  Parameters?: string;
  EventName?: string;
}

export class CaseTimestampList {
  CaseTimestamp: CaseTimestampElement[] | PurpleCaseTimestamp;
}

export class CaseTimestampElement {
  TimestampId: string;
  SortOrder: string;
  EnableGUI?: string;
  EnableClear?: string;
  CaseEventOperationList?: PurpleCaseEventOperationList;
  Hidden?: string;
  TimestampGroupId?: string;
  EnableSignatureChange?: string;
  EnableBusinessLogic?: string;
  EnableChangesAfterClosed?: string;
  UpdateTimestampInNewTx?: string;
  DependentTimestamp?: string;
  RunOperationsInNewTx?: string;
}

export class PurpleCaseEventOperationList {
  CaseEventOperation: FluffyCaseEventOperation[] | PurpleCaseEventOperation;
}

export class FluffyCaseEventOperation {
  id: string;
  OperationId: string;
  EventName: string;
  ExecutionOrder?: string;
  Parameters?: string;
  ErrorHandler?: string;
  FailOnError?: string;
}

export class PurpleCaseTimestamp {
  TimestampId: string;
  SortOrder: string;
  EnableGUI?: string;
  CaseEventOperationList?: CaseMethodsCaseEventOperationList;
  Hidden?: string;
  EnableBusinessLogic?: string;
  EnableChangesAfterClosed?: string;
}
