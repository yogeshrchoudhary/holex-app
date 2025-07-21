import { Component } from '@angular/core';

@Component({
  selector: 'hol-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  title = 'Expense Tracker';
  subTitle = 'as simple as it could be...';
}
