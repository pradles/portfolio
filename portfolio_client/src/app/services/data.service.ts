import { Injectable } from '@angular/core';
import * as projectData from '../../assets/project-data/data.json' 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProjectData(): any[] {
    return (projectData as any).default;
  }
}
