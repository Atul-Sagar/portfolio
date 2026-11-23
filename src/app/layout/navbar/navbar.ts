import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  menuOpen = false;

  toggleMenu(): void{
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void{
    this.menuOpen =false;
  }

  scrollTo(sectionId : string): void{
    const section = document.getElementById(sectionId);

    if(section){
      section.scrollIntoView({
        behavior: 'smooth', block: 'start'
      });
    }

    this.closeMenu();
  }
}
