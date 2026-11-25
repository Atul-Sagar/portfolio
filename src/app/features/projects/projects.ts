import { Component } from '@angular/core';
import { PROJECTS } from '../../core/data/portfolio.data';
import { Project } from '../../core/models/project.model';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {

  projects = PROJECTS;

  selectedProject: Project | null = null;

  openProject(projectId: Project): void {

    this.selectedProject = projectId;

    document.body.style.overflow = 'hidden';

  }

  closeProject(): void {

    this.selectedProject = null;

    document.body.style.overflow = 'auto';

  }

}
