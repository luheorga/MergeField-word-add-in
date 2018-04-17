import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatListModule, MatStepperModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    MatFormFieldModule, MatInputModule, BrowserAnimationsModule,
    MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule,
    MatListModule, MatStepperModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule, BrowserAnimationsModule,
    MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule,
    MatListModule, MatStepperModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
