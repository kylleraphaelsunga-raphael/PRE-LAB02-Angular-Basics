
import { Component, input } from '@angular/core';
import { Proficiency } from '../proficiency';

@Component({
  imports: [],
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  fullName = input.required<string>();
  proficiencies = input.required<Proficiency[]>();

  year = new Date().getFullYear();
}
