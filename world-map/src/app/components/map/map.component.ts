import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { SidePanelComponent } from '../side-panel/side-panel.component';
import { ZoomControlsComponent } from '../zoom-controls/zoom-controls.component';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NgStyle, SidePanelComponent, ZoomControlsComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent implements AfterViewInit {
  constructor(private elRef: ElementRef) {}

  zoomValue = 100;

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
    const countryCode = pathElement.getAttribute('id');

    console.log('Clicked country:', countryName, countryCode);
    
  }
}
