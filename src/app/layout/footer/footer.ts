import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  currentYear = new Date().getFullYear();

  scrollTo(sectionId: string): void{
    const section = document.getElementById(sectionId);

    if (section){
      section.scrollIntoView({
        behavior: 'smooth', block: 'start'
      })
    }
  }
}
