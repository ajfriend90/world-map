import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { SidePanelComponent } from '../side-panel/side-panel.component';
import { ZoomControlsComponent } from '../zoom-controls/zoom-controls.component';
import { CountryService } from '../../services/country.service';
import { CountryData } from '../../models/country-data.model';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NgStyle, SidePanelComponent, ZoomControlsComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent implements AfterViewInit {
  constructor(
    private elRef: ElementRef,
    private countryService: CountryService
  ) {}

  zoomValue = 100;
  selectedCountry: CountryData | null = null;

  ngAfterViewInit(): void {
    const svgPaths = this.elRef.nativeElement.querySelectorAll('svg path');

    svgPaths.forEach((path: SVGPathElement) => {
      path.addEventListener('click', (event: MouseEvent) => this.onCountryClick(event));
    });
  }

  onZoomChange(value: number) {
    this.zoomValue = value;
  }

  onCountryClick(event: MouseEvent): void {
    const pathElement = event.target as SVGPathElement;
    const countryName = pathElement.getAttribute('name');
    const countryCode = pathElement.getAttribute('id')?.toUpperCase();

    console.log(`Clicked: ${countryName} (${countryCode})`);
    
    if (countryCode) {
      this.countryService.getCountryData(countryCode).subscribe(data => {
        if (data) {
          this.selectedCountry = data;
          console.log('Country data:', data);
        } else {
          console.warn('No data found for', countryCode);
        }
      });
    }
  }
}
