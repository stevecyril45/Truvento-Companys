import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  showWarning = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      this.showWarning = false;
      setTimeout(() => this.submitted = false, 5000); // optional
      form.resetForm();
    } else {
      this.showWarning = true;
      this.submitted = false;
    }
  }
}
