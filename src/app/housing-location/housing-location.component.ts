import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img [src]="housingLocation.photo" alt="Exterior photo of {{ housingLocation.name }}" class="listing-photo">
      <h2 class="lisiting-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
  `,
  styles: [
  ]
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation;
}
