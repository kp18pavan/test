import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kp',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './kp.component.html',
  styleUrl: './kp.component.css'
})
export class KpComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
  
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  
      password: ['', [Validators.required, Validators.minLength(6)]] 
    });
  } ngOnInit(): void {}

  onSubmit() {
    if (this.registrationForm.valid) {
      const formValues = this.registrationForm.value;
      console.log('User Registered with Email:', formValues.email);
      this.router.navigate(['/todo']); 
    } else {
      console.log('Form is not valid!');
    }
  }
}