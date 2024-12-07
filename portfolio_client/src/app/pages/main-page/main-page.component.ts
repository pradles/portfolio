import { Component } from '@angular/core';

import { HeaderComponent } from '../../core/header/header.component';
import { ProjectCarouselComponent } from '../../core/project-carousel/project-carousel.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ HeaderComponent, ProjectCarouselComponent ],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

}
