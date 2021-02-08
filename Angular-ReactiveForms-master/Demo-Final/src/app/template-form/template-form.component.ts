import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NgModel, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('firstNameControl') firstNameControl: NgModel;
  @ViewChild('notificationControl') notificationControl: NgModel;
  @ViewChild('customerForm') customerForm: FormGroup;
  yesNoOptions = [{
    label: "Yes",
    value: true
  },
  {
    label: "No",
    value: false
  }];
  whatKindOfBusinessOptions = [
    { 
      label: "Trade",
      value: 'trade'},
    { 
      label: "Consultant",
      value: 'Consultant'},
    { 
      label: "Medical",
      value: 'Medical'},
];
people = [''];
viewModel:any = {
  businessType: {},
  people: []
};

  constructor() { }

  ngOnInit(): void {
  }
  save() {
    console.log('form value:');
    console.log(this.customerForm.value);
    console.log("*********");
    console.log("viewModel:");
    console.log(this.viewModel);
  }
  onSelect(val) {
    console.log(`selected ${val}`);
  }
  addDynamicField() {
    this.people.push('');
  }
  removePerson() {
    this.people.pop();
  }

}
