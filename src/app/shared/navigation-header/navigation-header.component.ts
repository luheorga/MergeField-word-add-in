import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent {

  constructor(private router: Router) { }

  CloseSession() {
    //TODO haces la lógica del logout
    this.router.navigate(['/login']);
  }
  ShowInstructions(){
    this.router.navigate(['/home/instructions']);
  }

}
