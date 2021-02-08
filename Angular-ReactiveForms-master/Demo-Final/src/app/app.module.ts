import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { RadioButtonComponent } from './controls/radio-button/radio-button.component';
import { TextInputComponent } from './controls/text-input/text-input.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { FormControlWrapperComponent } from './controls/form-control-wrapper/form-control-wrapper.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TdTextInputComponent } from './td-text-input/td-text-input.component';
import { NullOnHideDirective } from './null-on-hide.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RadioButtonComponent,
    TextInputComponent,
    CheckboxComponent,
    FormControlWrapperComponent,
    TemplateFormComponent,
    TdTextInputComponent,
    NullOnHideDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
