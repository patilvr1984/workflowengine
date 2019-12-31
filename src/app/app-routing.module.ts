import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkflowengineComponent} from './workflowengine/workflowengine.component';
import {WorkflowtemplateComponent} from './workflowtemplate/workflowtemplate.component';

export const routes: Routes = [
    {path: '', redirectTo: '/wrkengine', pathMatch: 'full' },
    {path: 'wrkengine', component: WorkflowengineComponent},
    {path: 'wrktemplate', component: WorkflowtemplateComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
