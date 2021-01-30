import { Component } from '@angular/core';

interface IForm {
  userName: string;
  email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  formData: IForm;
  showPopUp: boolean;
  constructor() {
    this.formData = {
      email: '',
      userName: ''
    }
    this.showPopUp = false;
  }
  submitForm() {
    this.togglePopUp(true);
  }
  togglePopUp(val: boolean) {
    this.showPopUp = val;
  }
}
