
import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // The parent (App) owns all CV data and passes it down to the children.
  fullName = 'Sunga, Kylle Raphael Yambao';
  location = 'Mabalacat City, Pampanga';
  email = 'kysunga1@student.hau.edu.ph';
  phone = '0926 499 2411';

  profile = 'I am a college student with an interest in web development and technology. I enjoy exploring new ideas, learning programming languages, and developing my skills in creating websites and web applications. I am always willing to learn and improve as I work toward becoming a better developer.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Web Design',
    'Programming',
    'Problem-Solving',
    'Database Basics',
    'Teamwork',
    'Communication'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'HTML and CSS', level: 'Intermediate' },
    { tool: 'JavaScript and TypeScript', level: 'Intermediate' },
    { tool: 'Angular', level: 'Beginner' },
    { tool: 'Node.js and Express.js', level: 'Intermediate' },
    { tool: 'MongoDB', level: 'Intermediate' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Visual Studio Code', level: 'Advanced' }
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
