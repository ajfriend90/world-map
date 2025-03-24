import { Component } from '@angular/core';
import { SidePanelComponent } from '../side-panel/side-panel.component';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [SidePanelComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

}
