import { Component } from '@angular/core';
import { IHoliday } from './holiday.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hol-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  holiday: IHoliday = {
    title: 'Dorset',
    id: 1,
    date: new Date('2023-12-25'),
    description: 'Lulworth Cove, Dorset and the Jurassic Coast World Heritage Site'
  }

  holidays: IHoliday[] = [
    {
      title: 'Dorset',
      id: 1,
      date: new Date('2025-05-22'),
      description: 'Lulworth Cove, Dorset and the Jurassic Coast World Heritage Site'
    },  
    {
      title: 'Cotswolds',
      id: 2,
      date: new Date('2025-03-10'),
      description: 'Lovely vilages of Bourton-on-the-Water, Cotswolds and Moreton-in-Marsh Market Town',
    }];


  generateLogoUrl(holiday: IHoliday): string {
    return `https://picsum.photos/seed/${holiday.date.getDay()}/75/75`;
  }
}
