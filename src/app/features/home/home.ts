import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Experience } from '../experience/experience';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { Navbar } from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';

@Component({
  imports: [
    Hero,
    About,
    Skills,
    Experience,
    Projects,
    Contact,
    Navbar,
    Footer
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
