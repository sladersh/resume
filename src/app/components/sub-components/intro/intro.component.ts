import { Component, OnInit } from '@angular/core';
import { ProfileImage, IntroData } from 'src/app/config/app-config';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import {
  faEnvelope,
  faGlobe,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Links } from 'src/app/models/links';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  // App Config
  profileImage = ProfileImage;
  introData = IntroData;

  // Font Awesome
  faMoon = faMoon;
  faSun = faSun;
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faGlobe = faGlobe;
  faFileContract = faFileContract;

  // Component Variables
  darkTheme: boolean = true;
  socialLinks: Links[] = [
    {
      icon: faGlobe,
      text: 'sladersh.github.io',
      link: 'https://sladersh.github.io/',
    },
    {
      icon: faLinkedin,
      text: 'sladersh',
      link: 'https://www.linkedin.com/in/sladersh/',
    },
    {
      icon: faGithub,
      text: 'sladersh',
      link: 'https://github.com/sladersh',
    },
    {
      icon: faFileContract,
      text: 'Download Resume',
      link: 'https://www.dropbox.com/s/0fnbyf3y3m2ubo7/Adersh%20S%20L%20-%20Resume.pdf?dl=1',
    },
  ];

  ngOnInit(): void {
    // Empty ngOnInit
  }

  toggleTheme() {
    if (this.darkTheme) {
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
    }
    this.darkTheme = !this.darkTheme;
  }
}
