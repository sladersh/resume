import { Component, OnInit } from '@angular/core';
import { SkillsData } from 'src/app/config/app-config';
import {
  faAngleUp,
  faAngleDown,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { faAngular, faJs, faSass } from '@fortawesome/free-brands-svg-icons';
import { Skills } from 'src/app/models/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  // App Config
  skillsData = SkillsData;

  // Font Awesome
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faAngular = faAngular;
  faJs = faJs;
  faCode = faCode;
  faSass = faSass;

  // Component Variables
  isCollapsed = false;
  skills: Skills[] = [
    {
      icon: faAngular,
      text: 'Angular',
    },
    {
      icon: faJs,
      text: 'JavaScript',
    },
    {
      icon: faCode,
      text: 'TypeScript',
    },
    {
      icon: faSass,
      text: 'SASS',
    },
  ];

  ngOnInit(): void {
    // Empty ngOnInit
  }

  isExpanded() {
    this.isCollapsed = !this.isCollapsed;
  }
}
