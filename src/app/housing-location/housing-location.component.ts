import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img src="" alt="" class="listing-photo">
      <h2 class="lisiting-heading"></h2>
      <p class="listing-location"></p>
    </section>
  `,
  styles: [
  ]
})
export class HousingLocationComponent {

}
