import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventComponent } from 'src/app/components/create-event/create-event.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(private dialog: MatDialog){}

  openDialog() {
    this.dialog.open(CreateEventComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}
