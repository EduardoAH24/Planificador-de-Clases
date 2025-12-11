import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../../services/class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private classService: ClassService,
    private router: Router
  ) {
    this.form = this.fb.group({
      curso: ['', [Validators.required, Validators.minLength(3)]],
      tema: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora_inicio: ['', [Validators.required]],
      hora_fin: ['', [Validators.required]]
    });
  }

  registrar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const data = this.form.value;

    this.classService.createClass(data)
      .then(() => {
        alert('Clase registrada');
        this.router.navigate(['/clases']);
      })
      .catch(err => console.error(err));
  }
}
