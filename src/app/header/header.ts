
import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // Inputs: values this component receives from its parent.
  fullName = input.required<string>();
  location = input.required<string>();
  email = input.required<string>();
  phone = input.required<string>();
  profile = input.required<string>();
}
