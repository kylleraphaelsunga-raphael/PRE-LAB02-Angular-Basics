import { ProfileCard } from './profile-card/profile-card';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  fullName = 'Sunga, Kylle Raphael Yambao';
  location = 'Mabalacat City, Pampanga';
  email = 'kysunga1@student.hau.edu.ph';
  phone = '0926 499 2411';

  profile = 'I am a college student with an interest in web development and technology. I enjoy exploring new ideas, learning programming languages, and developing my skills in creating websites and web applications. I am always willing to learn and improve as I work toward becoming a better developer.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
