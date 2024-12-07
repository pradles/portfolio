import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.css'
})
export class ProjectCarouselComponent implements OnInit, AfterViewInit{
  projectData: any[] = [];
  marginLeft: string = 'ml-[0vw]';


  constructor(dataService: DataService) {
    this.projectData = dataService.getProjectData();
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    for(let i=0; i<this.projectData.length; i++) {
      let that = this;
      setTimeout(function() {
        that.marginLeft = `ml-[-${((77.1*(i+1)).toFixed(1))}vw]`;
        console.log(that.marginLeft)
      }, 4000*(i+1));
    }
    // // Change the margin dynamically in steps over time
    // setTimeout(() => {
    //   this.marginLeft = 'ml-[-77.1vw]'; // Step 1
    // }, 5000); // Wait for 1 second before starting transition

    // setTimeout(() => {
    //   this.marginLeft = 'ml-[-154.2vw]'; // Step 2
    // }, 10000); // Wait for 3 seconds before changing again

    // setTimeout(() => {
    //   this.marginLeft = 'ml-[-231.3vw]'; // Step 3
    // }, 15000); // Step 3 after another 2 seconds
  }

}
