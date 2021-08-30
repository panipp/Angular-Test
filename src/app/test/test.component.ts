import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  formArray: Form[] = [
    {
      id: 'name',
      value: '',
      type: 'text',
    },
    {
      id: 'email',
      value: '',
      type: 'text',
    },
    {
      id: 'gender',
      value: 'male',
      type: 'radio',
    },
  ]

  firstForm = new FormGroup({});
  secondForm = this.firstForm;

  constructor() {}

  ngOnInit(): void {
    this.formArray.forEach(form => {
      this.firstForm.addControl(form.id, new FormControl(form.value))
    })
  }
}

interface Form {
  id: string,
  value: string,
  type: string,
}
