import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormdataService } from '../../core/services/formdata.service';  // ✅ correct path
import { Form } from '../../model/form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  showWarning = false;

  constructor(
    private fb: FormBuilder,
    private formdataService: FormdataService   // ✅ this is crucial
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      const formData: Form = this.contactForm.value;

      this.formdataService.saveDetails(formData).subscribe({  // ✅ now it works
        next: () => {
          this.submitted = true;
          this.showWarning = false;
          this.contactForm.reset();
          setTimeout(() => this.submitted = false, 5000);
        },
        error: (err) => {
          console.error('Submission failed:', err);
          this.showWarning = true;
          this.submitted = false;
        }
      });

    } else {
      this.showWarning = true;
      this.submitted = false;
    }
  }
}
