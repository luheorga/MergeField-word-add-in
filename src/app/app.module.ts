import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Componentes custom
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavigationHeaderComponent } from './shared/navigation-header/navigation-header.component';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { InstructionsComponent } from './instructions/instructions.component';
import { OrionToDocComponent } from './orion-to-doc/orion-to-doc.component';
import { WordDocumentService } from './services/word-document/word-document.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    NavigationHeaderComponent,
    InstructionsComponent,
    OrionToDocComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularMaterialModule
  ],
  providers: [WordDocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
