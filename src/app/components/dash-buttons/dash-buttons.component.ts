import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dash-buttons',
  templateUrl: './dash-buttons.component.html',
  styleUrls: ['./dash-buttons.component.scss']
})
export class DashButtonsComponent {
  current = 'dashboard'

  @Output() currentTile: EventEmitter<any> = new EventEmitter()

  toggle(tileName: string) {
    this.current = tileName
    this.currentTile.emit(tileName)
  }
}
