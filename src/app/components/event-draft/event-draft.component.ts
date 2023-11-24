import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-draft',
  templateUrl: './event-draft.component.html',
  styleUrls: ['./event-draft.component.scss']
})
export class EventDraftComponent {

  @Input() event!: any

}
