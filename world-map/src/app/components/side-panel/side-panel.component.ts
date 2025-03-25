import { Component, Input } from '@angular/core';
import { CountryData } from '../../models/country-data.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [NgIf],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})

export class SidePanelComponent {
  @Input() country: CountryData | null = null;
}
