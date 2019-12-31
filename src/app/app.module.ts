import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkflowtemplateComponent } from './workflowtemplate/workflowtemplate.component';
import { WorkflowengineComponent } from './workflowengine/workflowengine.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IgxNavbarModule, IgxCardModule,
        IgxIconModule, IgxTabsModule,
        IgxSelectModule, IgxInputGroupModule,
        IgxButtonModule, IgxDialogModule, IgxRippleModule
        } from 'igniteui-angular';
import {WfeMaterialModule} from './material-module';
import {ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    WorkflowtemplateComponent,
    WorkflowengineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxCardModule,
    IgxTabsModule,
    WfeMaterialModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxDialogModule,
    IgxRippleModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
