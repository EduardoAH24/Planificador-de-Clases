import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export const appConfig = {
  providers: [
    provideAnimations(),
    importProvidersFrom(ReactiveFormsModule, FormsModule)
  ]
};
