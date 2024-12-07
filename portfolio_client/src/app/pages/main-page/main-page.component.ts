import { Component } from '@angular/core';

import { HeaderComponent } from '../../core/header/header.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ HeaderComponent ],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

}
