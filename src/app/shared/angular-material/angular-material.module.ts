import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    MatFormFieldModule, MatInputModule, BrowserAnimationsModule,
    MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule, BrowserAnimationsModule,
    MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule,
    MatListModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
