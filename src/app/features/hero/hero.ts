import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  downloadResume(): void {
    window.open(
      'assets/files/Atul Sagar Nov 2026 Resume.pdf','_blank'
    )
  }

  openLinkedIn():void{
    window.open(
      'https://www.linkedin.com/in/atul-sagar-36a824105','_blank'
    )
  }

  
}
