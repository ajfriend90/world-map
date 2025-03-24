import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-zoom-controls',
  standalone: true,
  imports: [],
  templateUrl: './zoom-controls.component.html',
  styleUrl: './zoom-controls.component.css'
})

export class ZoomControlsComponent {
  zoomValue = 100;

  @Output() zoomChange = new EventEmitter<number>();

  zoomIn() {
    if (this.zoomValue < 500) {
      this.zoomValue += 100;
      this.zoomChange.emit(this.zoomValue);
    }
  }

  zoomOut() {
    if (this.zoomValue > 100) {
      this.zoomValue -= 100;
      this.zoomChange.emit(this.zoomValue);
    }
  }
}
