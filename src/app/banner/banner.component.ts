import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'hol-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  title = 'Expense Tracker';
  subTitle = 'as simple as it could be...';
}
